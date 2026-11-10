
/* LyrionJS core: byte helpers shared by the protocol and the decoders. No DOM, no I/O. */
'use strict';
(function (G) {
  const LJ = G.LJ || (G.LJ = {});

  /** A growable byte queue with a read cursor. */
  class ByteQueue {
    constructor(cap = 65536) { this.buf = new Uint8Array(cap); this.start = 0; this.end = 0; }
    get length() { return this.end - this.start; }
    push(chunk) {
      const n = chunk.length;
      if (this.end + n > this.buf.length) {
        const live = this.end - this.start;
        if (live + n <= this.buf.length) {
          this.buf.copyWithin(0, this.start, this.end);
        } else {
          const nb = new Uint8Array(Math.max(this.buf.length * 2, live + n));
          nb.set(this.buf.subarray(this.start, this.end));
          this.buf = nb;
        }
        this.start = 0; this.end = live;
      }
      this.buf.set(chunk, this.end); this.end += n;
    }
    consume(n) { this.start += n; if (this.start >= this.end) this.start = this.end = 0; }
    peek(i) { return this.buf[this.start + i]; }
    view() { return this.buf.subarray(this.start, this.end); }
    take(n) { const v = this.buf.slice(this.start, this.start + n); this.consume(n); return v; }
    clear() { this.start = this.end = 0; }
  }

  const be16 = (b, i) => (b[i] << 8) | b[i + 1];
  const be32 = (b, i) => ((b[i] << 24) | (b[i + 1] << 16) | (b[i + 2] << 8) | b[i + 3]) >>> 0;
  const le32 = (b, i) => (b[i] | (b[i + 1] << 8) | (b[i + 2] << 16) | (b[i + 3] << 24)) >>> 0;
  function put32(b, i, v) { b[i] = v >>> 24; b[i + 1] = v >>> 16; b[i + 2] = v >>> 8; b[i + 3] = v; }
  function put16(b, i, v) { b[i] = v >>> 8; b[i + 1] = v; }
  function concat(a, b) { const o = new Uint8Array(a.length + b.length); o.set(a); o.set(b, a.length); return o; }
  function concatAll(parts) {
    let n = 0; for (const p of parts) n += p.length;
    const o = new Uint8Array(n); let i = 0;
    for (const p of parts) { o.set(p, i); i += p.length; }
    return o;
  }
  function indexOfSeq(u8, seq, from = 0) {
    outer: for (let i = from; i + seq.length <= u8.length; i++) {
      for (let j = 0; j < seq.length; j++) if (u8[i + j] !== seq[j]) continue outer;
      return i;
    }
    return -1;
  }
  const latin1 = (u8) => { let s = ''; for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]); return s; };
  /** Size of an ID3v2 tag starting at v[0], or 0 if there isn't one (needs 10 bytes). */
  const id3Size = (v) => (v.length >= 10 && v[0] === 0x49 && v[1] === 0x44 && v[2] === 0x33)
    ? 10 + (((v[6] & 127) << 21) | ((v[7] & 127) << 14) | ((v[8] & 127) << 7) | (v[9] & 127)) + ((v[5] & 0x10) ? 10 : 0)
    : 0;

  /**
   * Drops `n` bytes from a queue as they arrive, so a big tag or chunk (embedded artwork) never
   * has to be held whole. Flow control counts dropped bytes as consumed.
   */
  class Skipper {
    constructor() { this.left = 0; }
    start(n) { this.left = n; }
    get active() { return this.left > 0; }
    run(q) { const n = Math.min(this.left, q.length); q.consume(n); this.left -= n; return n; }
  }

  Object.assign(LJ, { ByteQueue, Skipper, be16, be32, le32, put16, put32, concat, concatAll, indexOfSeq, latin1, id3Size });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: Slimproto framing and messages, the HTTP response head and ICY metadata.
 * Server -> client: u16 length (opcode + payload), opcode, payload.
 * Client -> server: opcode, u32 payload length, payload. */
'use strict';
(function (G) {
  const LJ = G.LJ;
  const { be16, be32, put16, put32, concatAll, indexOfSeq, latin1 } = LJ;
  const te = new TextEncoder();

  const MAX_SERVER_FRAME = 32 * 1024;

  /**
   * The next whole frame in the queue: {op, payload}; null if more bytes are needed. A frame
   * longer than any LMS sends is skipped ({op: null}) rather than ending the connection.
   */
  function nextServerFrame(q) {
    if (q.length < 2) return null;
    const len = (q.peek(0) << 8) | q.peek(1);
    if (len < 4) { q.consume(Math.min(2 + len, q.length)); return { op: null }; }
    if (q.length < 2 + len) return null;
    if (len > MAX_SERVER_FRAME) { q.consume(2 + len); return { op: null }; }
    const f = q.take(2 + len);
    return { op: latin1(f.subarray(2, 6)), payload: f.subarray(6) };
  }

  function clientFrame(op, payload) {
    const f = new Uint8Array(8 + payload.length);
    for (let i = 0; i < 4; i++) f[i] = op.charCodeAt(i);
    put32(f, 4, payload.length);
    f.set(payload, 8);
    return f;
  }

  /** A server -> client frame (for tests and fakes). */
  function serverFrame(op, payload) {
    const f = new Uint8Array(6 + payload.length);
    put16(f, 0, 4 + payload.length);
    for (let i = 0; i < 4; i++) f[2 + i] = op.charCodeAt(i);
    f.set(payload, 6);
    return f;
  }

  const put64 = (p, i, v) => { const n = Math.max(0, Math.floor(v || 0)); put32(p, i, Math.floor(n / 4294967296)); put32(p, i + 4, n >>> 0); };

  function buildHelo({ mac, uuid, reconnect, bytesReceived, caps }) {
    const c = te.encode(caps);
    const p = new Uint8Array(36 + c.length);
    p[0] = 12;            // device id: squeezelite-class software player
    p[1] = 0;             // revision
    p.set(mac, 2);
    p.set(uuid || new Uint8Array(16), 8);
    put16(p, 24, reconnect ? 0x4000 : 0);
    put64(p, 26, bytesReceived);
    p[34] = 0x65; p[35] = 0x6e; // 'en'
    p.set(c, 36);
    return clientFrame('HELO', p);
  }

  function buildStat(s) {
    const p = new Uint8Array(53);
    for (let i = 0; i < 4; i++) p[i] = s.event.charCodeAt(i);
    p[4] = s.crlf || 0;
    put32(p, 7, s.bufSize >>> 0);
    put32(p, 11, s.bufFull >>> 0);
    put64(p, 15, s.bytesReceived);
    put16(p, 23, 0xffff); // signal strength: wired
    put32(p, 25, s.jiffies >>> 0);
    put32(p, 29, s.outSize >>> 0);
    put32(p, 33, s.outFull >>> 0);
    put32(p, 37, Math.floor((s.elapsedMs || 0) / 1000) >>> 0);
    put32(p, 43, Math.floor(s.elapsedMs || 0) >>> 0);
    put32(p, 47, s.serverTs >>> 0);
    put16(p, 51, s.error || 0);
    return clientFrame('STAT', p);
  }

  function parseStrm(p) {
    if (p.length < 24) throw new Error('strm truncated');
    const ch = (i) => String.fromCharCode(p[i]);
    return {
      command: ch(0), autostart: ch(1), format: ch(2), pcmSize: ch(3), pcmRate: ch(4),
      pcmChannels: ch(5), pcmEndian: ch(6), threshold: p[7], spdif: p[8], transPeriod: p[9],
      transType: ch(10), flags: p[11], outThreshold: p[12], replayGain: be32(p, 14),
      serverPort: be16(p, 18), serverIp: be32(p, 20), request: p.slice(24),
    };
  }

  /** A strm frame (for tests and fakes). */
  function buildStrm(o) {
    const req = o.request || new Uint8Array(0);
    const p = new Uint8Array(24 + req.length);
    const ch = (s, d) => (s || d).charCodeAt(0);
    p[0] = ch(o.command, 's'); p[1] = ch(o.autostart, '1'); p[2] = ch(o.format, 'f');
    p[3] = ch(o.pcmSize, '?'); p[4] = ch(o.pcmRate, '?'); p[5] = ch(o.pcmChannels, '?'); p[6] = ch(o.pcmEndian, '?');
    p[7] = o.threshold || 0; p[9] = o.transPeriod || 0; p[10] = ch(o.transType, '0'); p[11] = o.flags || 0;
    put32(p, 14, o.replayGain || 0); put16(p, 18, o.serverPort || 9000); put32(p, 20, o.serverIp || 0);
    p.set(req, 24);
    return serverFrame('strm', p);
  }

  function parseAudg(p) {
    if (p.length < 18) throw new Error('audg truncated');
    const adjust = p[8];
    return { adjust, left: adjust ? be32(p, 10) / 65536 : 1, right: adjust ? be32(p, 14) / 65536 : 1 };
  }

  const ipString = (n) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');

  /** The HTTP response head at the start of u8, once it is complete; null before that. */
  function parseHttpHead(u8) {
    const end = indexOfSeq(u8, [13, 10, 13, 10]);
    if (end < 0) return null;
    const lines = latin1(u8.subarray(0, end)).split('\r\n');
    const m = lines[0].match(/^(?:HTTP\/\d\.\d|ICY)\s+(\d+)/i) || [];
    const headers = {};
    for (const line of lines.slice(1)) {
      const i = line.indexOf(':');
      if (i > 0) headers[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
    }
    return { status: +(m[1] || 0), headers, headLen: end + 4, raw: u8.slice(0, end + 4) };
  }

  /** Strips ICY metadata from a stream (only present when the server was asked for it). */
  class IcyStripper {
    constructor(metaint) { this.metaint = metaint; this.left = metaint; this.metaLeft = -1; this.meta = []; }
    feed(chunk, onAudio, onMeta) {
      let i = 0;
      while (i < chunk.length) {
        if (this.metaLeft === -1) {              // audio
          const n = Math.min(this.left, chunk.length - i);
          if (n) onAudio(chunk.subarray(i, i + n));
          i += n; this.left -= n;
          if (this.left === 0) this.metaLeft = -2;
        } else if (this.metaLeft === -2) {       // the length byte
          this.metaLeft = chunk[i++] * 16; this.meta = [];
          if (this.metaLeft === 0) { this.metaLeft = -1; this.left = this.metaint; }
        } else {                                 // metadata
          const n = Math.min(this.metaLeft, chunk.length - i);
          this.meta.push(chunk.slice(i, i + n)); i += n; this.metaLeft -= n;
          if (this.metaLeft === 0) { onMeta(concatAll(this.meta)); this.metaLeft = -1; this.left = this.metaint; }
        }
      }
    }
  }

  Object.assign(LJ, {
    MAX_SERVER_FRAME, nextServerFrame, clientFrame, serverFrame, buildHelo, buildStat, parseStrm, buildStrm,
    parseAudg, ipString, parseHttpHead, IcyStripper,
  });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: what every decoder offers the player.
 *
 *   feed(u8)       compressed bytes as they arrive
 *   end()          no more bytes will come
 *   pump(n)        decode up to about n units: 'more' (call again), 'need' (wants bytes, or is
 *                  waiting for an asynchronous decoder) or 'done' (all audio delivered)
 *   abort()        stop for good (flushed or replaced): no more output, ever
 *   consumed       bytes the decoder has finished with: the player acknowledges these, which is
 *                  what keeps the stream flowing (bytes held for later don't count)
 *   outBits        bit depth of the audio delivered (for lossless re-wrapping)
 *   describe()     e.g. "FLAC 24-bit 96 kHz", or '' until known
 *   onBlock(rate, channels: Float32Array[])   decoded audio
 *   onFinished()   an asynchronous decoder has more to give: pump again
 *   onError(msg)   decoding failed for good
 */
'use strict';
(function (G) {
  const LJ = G.LJ;

  class Decoder {
    constructor(queueSize = 1 << 18) {
      this.q = new LJ.ByteQueue(queueSize);
      this.fed = 0; this.ended = false; this.aborted = false; this.outBits = 16;
      this.onBlock = null; this.onFinished = null; this.onError = null;
    }
    get buffered() { return this.q.length; }
    get consumed() { return this.fed - this.q.length; }
    feed(u8) { if (this.aborted) return; this.fed += u8.length; this.q.push(u8); }
    end() { this.ended = true; }
    abort() { this.aborted = true; this.q.clear(); }
    describe() { return ''; }
    _emit(rate, chans) { if (!this.aborted && this.onBlock) this.onBlock(rate, chans); }
  }

  LJ.Decoder = Decoder;
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: a streaming FLAC decoder, written from the format specification. */
'use strict';
(function (G) {
  const LJ = G.LJ;
  const { be16, be32, id3Size, Skipper } = LJ;

  const NEED = { need: true };
  const BAD = { bad: true };

  const CRC8 = new Uint8Array(256), CRC16 = new Uint16Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i; for (let j = 0; j < 8; j++) c = (c & 0x80) ? ((c << 1) ^ 0x07) & 0xff : (c << 1) & 0xff; CRC8[i] = c;
    let d = i << 8; for (let j = 0; j < 8; j++) d = (d & 0x8000) ? ((d << 1) ^ 0x8005) & 0xffff : (d << 1) & 0xffff; CRC16[i] = d;
  }
  function crc8(b, s, e) { let c = 0; for (let i = s; i < e; i++) c = CRC8[c ^ b[i]]; return c; }
  function crc16(b, s, e) { let c = 0; for (let i = s; i < e; i++) c = ((c << 8) ^ CRC16[(c >> 8) ^ b[i]]) & 0xffff; return c; }

  /** Big-endian bit reader over b[start..end); reading past the end throws NEED. */
  class BitReader {
    constructor(b, start, end) { this.b = b; this.pos = start * 8; this.endBits = end * 8; }
    word() { const b = this.b, i = this.pos >>> 3; return (((b[i] | 0) << 24) | ((b[i + 1] | 0) << 16) | ((b[i + 2] | 0) << 8) | (b[i + 3] | 0)) >>> 0; }
    read(n) {
      if (n === 0) return 0;
      if (n > 24) { const hi = this.read(n - 16); return hi * 65536 + this.read(16); }
      const o = this.pos & 7, w = this.word();
      this.pos += n;
      return ((w << o) >>> 0) >>> (32 - n);
    }
    signed(n) { if (n === 0) return 0; const v = this.read(n), half = 2 ** (n - 1); return v >= half ? v - 2 * half : v; }
    unary() {
      let z = 0;
      for (;;) {
        const o = this.pos & 7, w = (this.word() << o) >>> 0, avail = 32 - o;
        if (w === 0) { z += avail; this.pos += avail; if (this.pos > this.endBits) throw NEED; continue; }
        const c = Math.clz32(w); z += c; this.pos += c + 1; return z;
      }
    }
    check() { if (this.pos > this.endBits) throw NEED; }
  }

  const BLOCK_SIZES = [0, 192, 576, 1152, 2304, 4608, 0, 0, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];
  const RATES = [0, 88200, 176400, 192000, 8000, 16000, 22050, 24000, 32000, 44100, 48000, 96000];
  const SAMPLE_SIZES = [0, 8, 12, -1, 16, 20, 24, 32];

  function residual(br, n, order, out) {
    const method = br.read(2);
    if (method > 1) throw BAD;
    const pbits = method === 0 ? 4 : 5, esc = method === 0 ? 15 : 31;
    const porder = br.read(4);
    const parts = 1 << porder, psize = n >>> porder;
    if ((psize << porder) !== n || psize < order) throw BAD;
    let i = order;
    for (let p = 0; p < parts; p++) {
      const cnt = p === 0 ? psize - order : psize;
      const k = br.read(pbits);
      if (k === esc) {
        const bits = br.read(5);
        for (let j = 0; j < cnt; j++) out[i++] = br.signed(bits);
      } else {
        const pw = 2 ** k;
        for (let j = 0; j < cnt; j++) {
          const v = br.unary() * pw + (k ? br.read(k) : 0);
          out[i++] = (v % 2) ? -(v + 1) / 2 : v / 2;
        }
      }
      br.check();
    }
  }

  function subframe(br, n, bps, out) {
    if (br.read(1) !== 0) throw BAD;
    const type = br.read(6);
    let wasted = 0;
    if (br.read(1)) wasted = br.unary() + 1;
    const bits = bps - wasted;
    if (bits <= 0) throw BAD;
    if (type === 0) {                              // constant
      const v = br.signed(bits); for (let i = 0; i < n; i++) out[i] = v;
    } else if (type === 1) {                       // verbatim
      for (let i = 0; i < n; i++) out[i] = br.signed(bits);
    } else if (type >= 8 && type <= 12) {          // fixed predictor
      const order = type - 8;
      if (order > n) throw BAD;
      for (let i = 0; i < order; i++) out[i] = br.signed(bits);
      residual(br, n, order, out);
      switch (order) {
        case 1: for (let i = 1; i < n; i++) out[i] += out[i - 1]; break;
        case 2: for (let i = 2; i < n; i++) out[i] += 2 * out[i - 1] - out[i - 2]; break;
        case 3: for (let i = 3; i < n; i++) out[i] += 3 * out[i - 1] - 3 * out[i - 2] + out[i - 3]; break;
        case 4: for (let i = 4; i < n; i++) out[i] += 4 * out[i - 1] - 6 * out[i - 2] + 4 * out[i - 3] - out[i - 4]; break;
      }
    } else if (type >= 32) {                       // LPC
      const order = type - 31;
      if (order > n) throw BAD;
      for (let i = 0; i < order; i++) out[i] = br.signed(bits);
      const prec = br.read(4) + 1;
      if (prec === 16) throw BAD;
      const shift = br.signed(5);
      if (shift < 0) throw BAD;
      const coef = new Float64Array(order);
      for (let j = 0; j < order; j++) coef[j] = br.signed(prec);
      residual(br, n, order, out);
      const div = 2 ** shift;
      for (let i = order; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < order; j++) sum += coef[j] * out[i - 1 - j];
        out[i] += Math.floor(sum / div);
      }
    } else {
      throw BAD;
    }
    if (wasted) { const m = 2 ** wasted; for (let i = 0; i < n; i++) out[i] *= m; }
  }

  /** Decode one frame at b[s..e): {len, rate, channels, bits, frames, data, ints} or NEED / BAD. */
  function flacFrame(b, s, e, info) {
    // The smallest frame (silence, mono, 8-bit) is 7 bytes; the bit reader bounds the rest.
    if (e - s < 7) return NEED;
    if (b[s] !== 0xff || (b[s + 1] & 0xfe) !== 0xf8) return BAD;
    const br = new BitReader(b, s, e);
    try {
      br.read(16);
      const bsCode = br.read(4), srCode = br.read(4), chCode = br.read(4), ssCode = br.read(3);
      if (br.read(1)) return BAD;
      const x = br.read(8);                        // UTF-8-style coded frame/sample number
      if (x >= 0x80) {
        let extra;
        if ((x & 0xe0) === 0xc0) extra = 1; else if ((x & 0xf0) === 0xe0) extra = 2;
        else if ((x & 0xf8) === 0xf0) extra = 3; else if ((x & 0xfc) === 0xf8) extra = 4;
        else if ((x & 0xfe) === 0xfc) extra = 5; else if (x === 0xfe) extra = 6; else return BAD;
        for (let i = 0; i < extra; i++) if ((br.read(8) & 0xc0) !== 0x80) return BAD;
      }
      if (bsCode === 0) return BAD;
      let n = BLOCK_SIZES[bsCode];
      if (bsCode === 6) n = br.read(8) + 1; else if (bsCode === 7) n = br.read(16) + 1;
      let rate;
      if (srCode === 0) rate = info && info.rate;
      else if (srCode < 12) rate = RATES[srCode];
      else if (srCode === 12) rate = br.read(8) * 1000;
      else if (srCode === 13) rate = br.read(16);
      else if (srCode === 14) rate = br.read(16) * 10;
      else return BAD;
      if (!rate) return BAD;
      const headEnd = br.pos >>> 3;
      if (headEnd >= e) return NEED;
      if (crc8(b, s, headEnd) !== b[headEnd]) return BAD;
      br.read(8);
      let bps = SAMPLE_SIZES[ssCode];
      if (ssCode === 0) bps = info && info.bits;
      if (!bps || bps < 0 || bps > 24) return BAD;
      let channels;
      if (chCode < 8) channels = chCode + 1; else if (chCode <= 10) channels = 2; else return BAD;
      if (info && info.maxBlock && n > Math.max(info.maxBlock, 16)) return BAD;
      const sub = [];
      for (let c = 0; c < channels; c++) {
        const side = (chCode === 8 && c === 1) || (chCode === 9 && c === 0) || (chCode === 10 && c === 1);
        const out = new Float64Array(n);
        subframe(br, n, bps + (side ? 1 : 0), out);
        br.check();
        sub.push(out);
      }
      br.pos = (br.pos + 7) & ~7;
      const end = (br.pos >>> 3) + 2;
      if (end > e) return NEED;
      if (crc16(b, s, end - 2) !== be16(b, end - 2)) return BAD;
      // Inter-channel decorrelation.
      if (chCode === 8) { const L = sub[0], S = sub[1]; for (let i = 0; i < n; i++) S[i] = L[i] - S[i]; }
      else if (chCode === 9) { const S = sub[0], R = sub[1]; for (let i = 0; i < n; i++) S[i] = S[i] + R[i]; }
      else if (chCode === 10) {
        const M = sub[0], S = sub[1];
        for (let i = 0; i < n; i++) {
          const side = S[i], mid = M[i] * 2 + (side & 1);
          M[i] = (mid + side) / 2; S[i] = (mid - side) / 2;
        }
      }
      const scale = 1 / 2 ** (bps - 1);
      const data = sub.map((ch) => { const f = new Float32Array(n); for (let i = 0; i < n; i++) f[i] = ch[i] * scale; return f; });
      return { len: end - s, rate, channels, bits: bps, frames: n, data, ints: sub };
    } catch (err) {
      if (err === NEED) return NEED;
      if (err === BAD) return BAD;
      throw err;
    }
  }

  const isSync = (v, j) => v[j] === 0xff && (v[j + 1] & 0xfe) === 0xf8;

  class FlacDecoder extends LJ.Decoder {
    constructor() {
      super();
      this.state = 'start';   // start | meta | frames | done
      this.info = null; this.waitFor = 0; this.keepInts = false; this.skip = new Skipper(); this.lastMeta = false;
    }

    /** ID3 tag and metadata blocks. Only STREAMINFO is kept; the rest (artwork) is skipped as it arrives. */
    _metadata() {
      for (;;) {
        if (this.skip.active) {
          this.skip.run(this.q);
          if (this.skip.active) return this.ended ? 'done' : 'need';
          if (this.lastMeta) { this.state = 'frames'; return 'more'; }
        }
        const v = this.q.view();
        if (this.state === 'start') {
          if (v.length < 10 && !this.ended) return 'need';
          const tag = id3Size(v);
          if (tag) { this.skip.start(tag); continue; }
          if (v.length >= 4 && v[0] === 0x66 && v[1] === 0x4c && v[2] === 0x61 && v[3] === 0x43) { this.q.consume(4); this.state = 'meta'; continue; }
          this.state = 'frames'; return 'more'; // no header: frames from the start (a seek)
        }
        if (v.length < 4) return this.ended ? 'done' : 'need';
        const last = !!(v[0] & 0x80), type = v[0] & 0x7f, len = (v[1] << 16) | (v[2] << 8) | v[3];
        if (type === 0) {
          if (v.length < 4 + len) return this.ended ? 'done' : 'need';
          if (len >= 34) {
            const p = 4;
            this.info = {
              minBlock: be16(v, p), maxBlock: be16(v, p + 2),
              rate: (v[p + 10] << 12) | (v[p + 11] << 4) | (v[p + 12] >> 4),
              channels: ((v[p + 12] >> 1) & 7) + 1,
              bits: (((v[p + 12] & 1) << 4) | (v[p + 13] >> 4)) + 1,
              totalSamples: (v[p + 13] & 15) * 4294967296 + be32(v, p + 14),
            };
            this.outBits = this.info.bits;
            // Frames deeper than 24 bits aren't decoded: fail the track rather than play silence.
            if (this.info.bits > 24) throw new Error(`FLAC ${this.info.bits}-bit is not supported`);
          }
          this.q.consume(4 + len);
          if (last) { this.state = 'frames'; return 'more'; }
          continue;
        }
        this.q.consume(4);
        this.skip.start(len); this.lastMeta = last;
        if (!len && last) { this.state = 'frames'; return 'more'; }
      }
    }

    pump(maxFrames = 64) {
      if (this.state === 'done' || this.aborted) return 'done';
      if (this.state !== 'frames') {
        const r = this._metadata();
        if (r === 'done') this.state = 'done';
        if (r !== 'more') return r;
      }
      let produced = 0;
      while (produced < maxFrames) {
        const v = this.q.view();
        if (!this.ended && v.length < this.waitFor) return 'need';
        if (v.length < 2) { if (this.ended) { this.state = 'done'; return 'done'; } return 'need'; }
        if (!isSync(v, 0)) {
          let j = 1; while (j + 1 < v.length && !isSync(v, j)) j++;
          this.q.consume(j); continue;
        }
        const r = flacFrame(v, 0, v.length, this.info);
        if (r === NEED) {
          if (!this.ended) { this.waitFor = v.length + 4096; return 'need'; }
          // The stream has ended, so this was a false sync (or a cut-off frame): look for the next.
          let j = 1; while (j + 1 < v.length && !isSync(v, j)) j++;
          this.q.consume(j); continue;
        }
        this.waitFor = 0;
        if (r === BAD) { this.q.consume(1); continue; }
        this.q.consume(r.len);
        this.lastRate = r.rate; this.outBits = r.bits;
        if (!this.aborted && this.onBlock) this.onBlock(r.rate, r.data, this.keepInts ? r.ints : null);
        produced++;
      }
      return 'more';
    }

    describe() {
      const bits = (this.info && this.info.bits) || (this.lastRate && this.outBits);
      const rate = (this.info && this.info.rate) || this.lastRate;
      return bits && rate ? `FLAC ${bits}-bit ${rate / 1000} kHz` : '';
    }
  }

  Object.assign(LJ, { BitReader, flacFrame, FlacDecoder, crc8, crc16 });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: PCM as LMS sends it for format 'p': raw, WAV or AIFF/AIFC. */
'use strict';
(function (G) {
  const LJ = G.LJ;
  const { be16, be32, le32, latin1, Skipper } = LJ;
  /** The tail of the KSDATAFORMAT_SUBTYPE GUIDs (WAVE_FORMAT_EXTENSIBLE); the first two bytes are the format. */
  const GUID_TAIL = '\0\0\0\0\x10\0\x80\0\0\xaa\0\x38\x9b\x71';

  const RATES = { '0': 11025, '1': 22050, '2': 32000, '3': 44100, '4': 48000, '5': 8000, '6': 12000, '7': 16000,
    '8': 24000, '9': 96000, ':': 88200, ';': 176400, '<': 192000, '=': 352800, '>': 384000 };
  const SIZES = { '0': 8, '1': 16, '2': 24, '3': 32 };
  const BLOCK = 16384;    // frames per decoded block

  class PcmDecoder extends LJ.Decoder {
    /** strm: the strm command, whose PCM fields describe raw data (a header, if any, wins). */
    constructor(strm) {
      super();
      this.bits = SIZES[strm.pcmSize] || 16; this.rate = RATES[strm.pcmRate] || 44100;
      this.channels = strm.pcmChannels === '1' ? 1 : 2; this.little = strm.pcmEndian !== '0';
      this.signed8 = false; this.float = false; this.dataLeft = Infinity; this.state = 'start'; this.kind = 'raw';
      this.skip = new Skipper();
    }
    get outBits() { return Math.min(this.bits, 24); }
    set outBits(v) { /* derived from bits */ }

    /** Walks the WAV/AIFF header. Chunks other than the format are skipped as they arrive. */
    _header() {
      for (;;) {
        if (this.skip.active) { this.skip.run(this.q); if (this.skip.active) return this.ended ? 'eof' : 'need'; }
        if (this.state === 'skipToData') { this.state = 'data'; return 'ok'; }
        const v = this.q.view();
        if (this.state === 'start') {
          if (v.length < 12) { if (!this.ended) return 'need'; this.state = 'data'; return 'ok'; }
          const tag = latin1(v.subarray(0, 4)), kind = latin1(v.subarray(8, 12));
          if (tag === 'RIFF' && kind === 'WAVE') this.kind = 'wav';
          else if (tag === 'FORM' && (kind === 'AIFF' || kind === 'AIFC')) { this.kind = kind === 'AIFC' ? 'aifc' : 'aiff'; this.little = false; this.signed8 = true; }
          else { this.state = 'data'; return 'ok'; }
          this.q.consume(12); this.state = 'chunks'; continue;
        }
        if (v.length < 8) return this.ended ? 'eof' : 'need';
        const id = latin1(v.subarray(0, 4));
        const wav = this.kind === 'wav';
        const len = wav ? le32(v, 4) : be32(v, 4);
        const padded = len + (len & 1);
        if (wav && id === 'fmt ') {
          if (v.length < 8 + Math.max(16, Math.min(len, 40))) return this.ended ? 'eof' : 'need';
          let tag = v[8] | (v[9] << 8);
          if (tag === 0xfffe && len >= 40 && latin1(v.subarray(34, 48)) === GUID_TAIL) tag = v[32] | (v[33] << 8);
          if (tag !== 1 && tag !== 3) throw new Error('Unsupported WAV format 0x' + tag.toString(16));
          this.float = tag === 3;
          this.channels = v[10] | (v[11] << 8);
          this.rate = le32(v, 12);
          this.bits = v[22] | (v[23] << 8);
          this.little = true;
        } else if (!wav && id === 'COMM') {
          if (v.length < 8 + 18 + (this.kind === 'aifc' ? 4 : 0)) return this.ended ? 'eof' : 'need';
          this.channels = be16(v, 8); this.bits = be16(v, 14);
          const exp = (be16(v, 16) & 0x7fff) - 16383, mant = be32(v, 18);   // 80-bit extended float
          this.rate = Math.round(mant * 2 ** (exp - 31));
          if (this.kind === 'aifc') {
            const type = latin1(v.subarray(26, 30));
            if (!/^(NONE|twos|sowt|fl32|FL32|fl64|FL64)$/.test(type)) throw new Error('Unsupported AIFC compression ' + type);
            this.little = type === 'sowt'; this.float = /^fl/i.test(type);
          }
        } else if (wav && id === 'data') {
          this.q.consume(8);
          this.dataLeft = len && len !== 0xffffffff ? len : Infinity;
          this.state = 'data'; return 'ok';
        } else if (!wav && id === 'SSND') {
          if (v.length < 16) return this.ended ? 'eof' : 'need';
          const offset = be32(v, 8);
          this.q.consume(16); this.skip.start(offset);
          this.dataLeft = len > 8 + offset ? len - 8 - offset : Infinity;
          this.state = 'skipToData'; continue;
        }
        this.q.consume(8); this.skip.start(padded);
      }
    }

    pump(maxBlocks = 16) {
      if (this.state === 'done' || this.aborted) return 'done';
      if (this.state !== 'data') {
        const h = this._header();
        if (h === 'need') return 'need';
        if (h === 'eof') { this.state = 'done'; return 'done'; }
      }
      // Samples of 12 or 20 bits sit left-justified in whole bytes, so read them as 16 or 24.
      if (this.bits % 8) this.bits += 8 - this.bits % 8;
      const bytesPer = this.bits / 8, frameBytes = bytesPer * this.channels;
      if (!frameBytes || (this.float ? bytesPer !== 4 && bytesPer !== 8 : bytesPer > 4)) {
        throw new Error(`Unsupported PCM: ${this.bits}-bit${this.float ? ' float' : ''}, ${this.channels} channels`);
      }
      for (let b = 0; b < maxBlocks; b++) {
        const avail = Math.min(this.q.length, this.dataLeft);
        let frames = Math.floor(avail / frameBytes);
        if (frames < 4096 && !this.ended && this.dataLeft > frames * frameBytes) return 'need';
        frames = Math.min(frames, BLOCK);
        if (frames === 0) {
          if (this.ended || this.dataLeft === 0) { this.state = 'done'; return 'done'; }
          return 'need';
        }
        this._emit(this.rate, this._convert(this.q.view(), frames));
        this.q.consume(frames * frameBytes);
        if (this.dataLeft !== Infinity) this.dataLeft -= frames * frameBytes;
      }
      return 'more';
    }

    _convert(v, frames) {
      const out = [];
      for (let c = 0; c < this.channels; c++) out.push(new Float32Array(frames));
      const scale = 1 / 2 ** (this.bits - 1), lit = this.little, bits = this.bits, bytesPer = bits / 8, s8 = this.signed8;
      let i = 0;
      if (this.float) {
        const dv = new DataView(v.buffer, v.byteOffset, v.byteLength);
        for (let f = 0; f < frames; f++) {
          for (let c = 0; c < this.channels; c++) { out[c][f] = bits === 32 ? dv.getFloat32(i, lit) : dv.getFloat64(i, lit); i += bytesPer; }
        }
        return out;
      }
      for (let f = 0; f < frames; f++) {
        for (let c = 0; c < this.channels; c++) {
          let s;
          if (bits === 16) s = lit ? (v[i] | (v[i + 1] << 8)) << 16 >> 16 : (v[i + 1] | (v[i] << 8)) << 16 >> 16;
          else if (bits === 24) s = lit ? (v[i] | (v[i + 1] << 8) | (v[i + 2] << 16)) << 8 >> 8 : (v[i + 2] | (v[i + 1] << 8) | (v[i] << 16)) << 8 >> 8;
          else if (bits === 32) s = lit ? (v[i] | (v[i + 1] << 8) | (v[i + 2] << 16) | (v[i + 3] << 24)) : (v[i + 3] | (v[i + 2] << 8) | (v[i + 1] << 16) | (v[i] << 24));
          else s = s8 ? (v[i] << 24 >> 24) : v[i] - 128;   // 8-bit: signed in AIFF, unsigned in WAV
          out[c][f] = s * scale; i += bytesPer;
        }
      }
      return out;
    }

    describe() { return this.state === 'data' ? `PCM ${this.bits}-bit${this.float ? ' float' : ''} ${this.rate / 1000} kHz` : ''; }
  }

  Object.assign(LJ, { PcmDecoder });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: MP3. The framer and gapless trimming are ours; the decoding itself is the
 * browser's (WebCodecs, or decodeAudioData in chunks where WebCodecs isn't offered). */
'use strict';
(function (G) {
  const LJ = G.LJ;
  const { ByteQueue, Skipper, be32, latin1, id3Size } = LJ;

  const BITRATES = {
    '3-1': [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448],
    '3-2': [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384],
    '3-3': [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
    '2-1': [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256],
    '2-2': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
    '2-3': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
  };
  const RATES = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };
  /** Samples a decoder delays its output by (the LAME convention), beyond the encoder delay. */
  const DECODER_DELAY = 529;

  function mp3Header(b, i) {
    if (b[i] !== 0xff || (b[i + 1] & 0xe0) !== 0xe0) return null;
    const ver = (b[i + 1] >> 3) & 3, layer = (b[i + 1] >> 1) & 3;
    const bri = b[i + 2] >> 4, sri = (b[i + 2] >> 2) & 3, pad = (b[i + 2] >> 1) & 1, mode = b[i + 3] >> 6;
    if (ver === 1 || layer === 0 || bri === 0 || bri === 15 || sri === 3) return null;
    const lay = 4 - layer; // 1, 2 or 3
    const br = BITRATES[(ver === 3 ? 3 : 2) + '-' + lay][bri] * 1000;
    const rate = RATES[ver][sri];
    let len, samples;
    if (lay === 1) { len = (Math.floor(12 * br / rate) + pad) * 4; samples = 384; }
    else if (lay === 2 || ver === 3) { len = Math.floor(144 * br / rate) + pad; samples = 1152; }
    else { len = Math.floor(72 * br / rate) + pad; samples = 576; }
    return { len, rate, channels: mode === 3 ? 1 : 2, samples, ver, layer: lay, bitrate: br };
  }

  /** Splits an MP3 stream into frames, skipping ID3 tags; reads the LAME tag for gapless trimming. */
  class Mp3Framer {
    constructor(q = new ByteQueue(1 << 17)) {
      this.q = q; this.ended = false; this.first = true; this.delay = 0; this.padding = 0; this.info = null;
      this.synced = false; this.skip = new Skipper();
    }
    feed(u8) { this.q.push(u8); }
    get buffered() { return this.q.length; }
    /** {frame, hdr} | 'need' | 'done'. */
    next() {
      for (;;) {
        if (this.skip.active) { this.skip.run(this.q); if (this.skip.active) return this.ended ? 'done' : 'need'; }
        const v = this.q.view();
        if (v.length < 10) { if (this.ended) { this.q.clear(); return 'done'; } return 'need'; }
        const tag = id3Size(v);
        if (tag) { this.skip.start(tag); continue; }
        const h = mp3Header(v, 0);
        if (!h) {
          this.synced = false;
          let j = 1; while (j + 1 < v.length && !(v[j] === 0xff && (v[j + 1] & 0xe0) === 0xe0)) j++;
          this.q.consume(j); continue;
        }
        if (v.length < h.len + 4 && !this.ended) return 'need';
        if (!this.synced && v.length >= h.len + 4) {
          // Out of sync (stream start, or a seek into a file): the next frame must line up and
          // agree, so a stray 0xFFE in the audio isn't taken for a frame.
          const h2 = mp3Header(v, h.len);
          if (!h2 || h2.rate !== h.rate || h2.ver !== h.ver || h2.layer !== h.layer || h2.channels !== h.channels) { this.q.consume(1); continue; }
        }
        if (h.len > v.length) { this.q.clear(); return 'done'; }
        this.synced = true;
        const frame = this.q.take(h.len);
        if (this.first) {
          this.first = false;
          if (this._lameTag(frame, h)) continue;   // the tag frame carries no audio
        }
        this.info = this.info || h;
        return { frame, hdr: h };
      }
    }
    _lameTag(frame, h) {
      const side = h.ver === 3 ? (h.channels === 1 ? 17 : 32) : (h.channels === 1 ? 9 : 17);
      const x = 4 + side, tag = latin1(frame.subarray(x, x + 4));
      if (tag !== 'Xing' && tag !== 'Info') return false;
      const flags = be32(frame, x + 4);
      let o = x + 8; if (flags & 1) o += 4; if (flags & 2) o += 4; if (flags & 4) o += 100; if (flags & 8) o += 4;
      // LAME writes its delay and padding here; FFmpeg writes the same block as 'Lavf' or 'Lavc'.
      if (o + 24 <= frame.length && /^(LAME|Lavf|Lavc)$/.test(latin1(frame.subarray(o, o + 4)))) {
        const d = frame.subarray(o + 21, o + 24);
        this.delay = (d[0] << 4) | (d[1] >> 4); this.padding = ((d[1] & 15) << 8) | d[2];
      }
      this.info = h;
      return true;
    }
  }

  /**
   * Gapless trimming shared by both MP3 decoders: drop the encoder + decoder delay at the start,
   * and hold the latest block back so the padding can be cut once the end is known.
   */
  class GaplessTrim {
    constructor(framer, decoderDelay) { this.framer = framer; this.decoderDelay = decoderDelay; this.skip = -1; this.held = null; }
    push(rate, chans, emit) {
      if (this.skip < 0) this.skip = this.framer.delay ? this.framer.delay + this.decoderDelay : 0;
      if (this.skip > 0) {
        const n = Math.min(this.skip, chans[0].length); this.skip -= n;
        chans = chans.map((c) => c.subarray(n));
        if (!chans[0].length) return;
      }
      if (this.held) emit(this.held.rate, this.held.chans);
      this.held = { rate, chans };
    }
    finish(emit) {
      if (!this.held) return;
      let chans = this.held.chans;
      const pad = Math.min(Math.max(0, this.framer.padding - this.decoderDelay), chans[0].length);
      if (pad) chans = chans.map((c) => c.subarray(0, c.length - pad));
      if (chans[0].length) emit(this.held.rate, chans);
      this.held = null;
    }
  }

  /** MP3 through WebCodecs AudioDecoder (Chrome, Edge, Firefox, Safari 26+, on secure pages). */
  class Mp3Decoder extends LJ.Decoder {
    static supported() { return typeof G.AudioDecoder === 'function' && typeof G.EncodedAudioChunk === 'function'; }
    constructor(opts = {}) {
      super(1 << 17);
      this.framer = new Mp3Framer(this.q);
      this.trim = new GaplessTrim(this.framer, opts.decoderDelay == null ? DECODER_DELAY : opts.decoderDelay);
      this.dec = null; this.config = null; this.ts = 0; this.outQ = []; this.busy = null; this.finished = false;
      this.errors = 0; this.failed = null; this.pending = null;
    }
    end() { super.end(); this.framer.ended = true; }
    abort() {
      super.abort(); this.finished = true; this.outQ = []; this.trim.held = null; this.pending = null;
      this._close(this.dec); this.dec = null;
    }
    _close(dec) { if (dec) { try { dec.close(); } catch (e) { /* closed */ } } }
    _wake() { if (!this.aborted && this.onFinished) this.onFinished(); }
    _open(h) {
      const dec = new G.AudioDecoder({
        output: (ad) => {
          if (this.aborted) { ad.close(); return; }
          const n = ad.numberOfFrames, ch = Math.min(ad.numberOfChannels, 2), chans = [];
          for (let c = 0; c < ch; c++) { const a = new Float32Array(n); ad.copyTo(a, { planeIndex: c, format: 'f32-planar' }); chans.push(a); }
          this.outQ.push({ rate: ad.sampleRate, chans }); ad.close();
          this.errors = 0;   // only failures in a row count
          this._wake();
        },
        // A corrupt frame closes the decoder; pump() opens a new one and carries on.
        error: (e) => { if (dec === this.dec) { this.failed = e; this.errors++; this._wake(); } },
      });
      dec.configure({ codec: 'mp3', sampleRate: h.rate, numberOfChannels: h.channels });
      this.dec = dec; this.config = h;
    }
    _drainOut() { while (this.outQ.length) { const o = this.outQ.shift(); this.trim.push(o.rate, o.chans, (r, c) => this._emit(r, c)); } }
    /** Let the current decoder finish what it holds, then run `then`. */
    _finishDecoder(then) {
      const dec = this.dec;
      this.busy = dec.flush().catch(() => {}).then(() => {
        if (this.aborted) return;
        this._drainOut();
        this._close(dec);
        if (this.dec === dec) this.dec = null;
        this.busy = null;
        then();
        this._wake();
      });
    }
    pump(maxFrames = 64) {
      if (this.finished || this.aborted) return 'done';
      if (this.failed) {
        this.failed = null; this.dec = null; this.busy = null;
        // 21 failures in a row: this stream can't be decoded.
        if (this.errors > 20) { this.finished = true; if (this.onError) this.onError('MP3 decoding failed'); return 'done'; }
      }
      this._drainOut();
      if (this.busy) return 'need';
      for (let i = 0; i < maxFrames; i++) {
        if (this.dec && this.dec.decodeQueueSize > 32) return 'need';
        const r = this.pending || this.framer.next();
        this.pending = null;
        if (r === 'need') return 'need';
        if (r === 'done') {
          if (!this.ended) return 'need';
          if (!this.dec) { this.trim.finish((rt, c) => this._emit(rt, c)); this.finished = true; return 'done'; }
          this._finishDecoder(() => { this.trim.finish((rt, c) => this._emit(rt, c)); this.finished = true; });
          return 'need';
        }
        if (this.dec && (this.config.rate !== r.hdr.rate || this.config.channels !== r.hdr.channels)) {
          // A format change: finish the old decoder first, so none of its audio is lost.
          this.pending = r;
          this._finishDecoder(() => {});
          return 'need';
        }
        if (!this.dec) this._open(r.hdr);
        this.dec.decode(new G.EncodedAudioChunk({ type: 'key', timestamp: this.ts, data: r.frame }));
        this.ts += Math.round(r.hdr.samples * 1e6 / r.hdr.rate);
      }
      return 'more';
    }
    describe() { const h = this.framer.info; return h ? `MP3 ${h.rate / 1000} kHz` : ''; }
  }

  /**
   * MP3 through the browser's decodeAudioData, where WebCodecs isn't offered (Chrome and Firefox
   * on plain http pages). The stream is decoded in chunks of about 10 s. Each chunk starts with
   * the last OVERLAP frames of the one before, so the bit reservoir and the MDCT overlap are
   * primed; the last HOLD frames of each chunk's audio are held back and replaced by the properly
   * decoded overlap of the next. The join is found by matching the audio, so it doesn't depend on
   * how much delay a particular browser's decoder adds.
   * decode(Uint8Array, rate, channels) -> Promise<Float32Array[]> is supplied by the host.
   */
  class Mp3ChunkDecoder extends LJ.Decoder {
    constructor(decode, opts = {}) {
      super(1 << 17);
      this.decode = decode; this.framer = new Mp3Framer(this.q);
      this.decoderDelay = opts.decoderDelay == null ? DECODER_DELAY : opts.decoderDelay;
      this.frames = []; this.prevTail = []; this.busy = false; this.finished = false; this.first = true;
      this.chunk = opts.chunk || 384; this.ref = null;
    }
    end() { super.end(); this.framer.ended = true; }
    abort() { super.abort(); this.finished = true; this.frames = []; }
    describe() { const h = this.framer.info; return h ? `MP3 ${h.rate / 1000} kHz` : ''; }
    pump() {
      if (this.finished || this.aborted) return 'done';
      let last = false;
      const want = this.first ? Math.min(96, this.chunk) : this.chunk;   // a short first chunk starts sooner
      // Move frames out of the byte queue, so flow control keeps the stream coming.
      while (this.frames.length < this.chunk) {
        const r = this.framer.next();
        if (r === 'need') break;
        if (r === 'done') { last = true; break; }
        this.frames.push(r); this.hdr = this.hdr || r.hdr;
      }
      if (this.busy) return 'need';
      if (this.frames.length < want && !last) return 'need';
      if (!this.frames.length) { if (last) { this.finished = true; return 'done'; } return 'need'; }
      const OVERLAP = 4, HOLD = 2;
      const take = this.frames.splice(0, want);
      const all = this.prevTail.concat(take);
      const overlapFrames = this.prevTail.length;
      this.prevTail = take.slice(-OVERLAP);
      const final = last && this.frames.length === 0;
      const bytes = LJ.concatAll(all.map((f) => f.frame));
      const spf = this.hdr.samples, rate = this.hdr.rate;
      const wasFirst = this.first;
      this.first = false;
      this.busy = true;
      const done = () => { this.busy = false; if (final) this.finished = true; if (!this.aborted && this.onFinished) this.onFinished(); };
      this.decode(bytes, rate, this.hdr.channels).then((chans) => {
        if (this.aborted) return;
        chans = chans.slice(0, 2);
        const start = wasFirst
          ? (this.framer.delay ? this.framer.delay + this.decoderDelay : 0)
          : this._align(chans[0], (overlapFrames - HOLD) * spf, spf);   // where the new audio continues the old
        let end = chans[0].length;
        if (!final) end -= HOLD * spf;
        else if (this.framer.padding) end -= Math.max(0, this.framer.padding - this.decoderDelay);
        if (end > start) {
          const out = chans.map((c) => c.slice(start, end));
          this.ref = out[0].slice(Math.max(0, out[0].length - 512));
          this._emit(rate, out);
        }
        done();
      }, () => { this.ref = null; done(); });   // a chunk the browser can't decode: skip it
      return 'need';
    }
    /** Offset in `x` that best continues the 512 samples emitted last (least squares). */
    _align(x, expect, spf) {
      const ref = this.ref;
      if (!ref || ref.length < 512) return Math.max(0, expect);
      const lo = Math.max(512, expect - spf), hi = Math.min(x.length - 1, expect + spf);
      let best = Math.max(0, expect), bestErr = Infinity, energy = 0;
      for (let k = 0; k < 512; k++) energy += ref[k] * ref[k];
      if (energy < 1e-6) return Math.max(0, expect); // silence: any offset is as good
      for (let o = lo; o <= hi; o++) {
        let e = 0;
        for (let k = 0; k < 512 && e < bestErr; k++) { const d = x[o - 512 + k] - ref[k]; e += d * d; }
        if (e < bestErr) { bestErr = e; best = o; }
      }
      return best;
    }
  }

  Object.assign(LJ, { mp3Header, Mp3Framer, Mp3Decoder, Mp3ChunkDecoder, DECODER_DELAY });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: transitions between tracks (crossfade, fade in, fade out), as squeezelite does
 * them. It sits between the decoders and the output, so both outputs get them.
 *
 * LMS gives each stream its own transition (strm type and period). For a crossfade, the end of
 * the playing track has to wait for the start of the next, which LMS sends only once this one
 * has finished decoding: so the end of a track whose own transition is a crossfade is held back
 * (a rolling window of `period` seconds). When the next track arrives with a crossfade too, the
 * two are mixed, and the mix belongs to the new track (its start is heard at the start of the
 * crossfade, as with squeezelite). Otherwise, or if the output runs low first, it is played as it is.
 * Fade in ramps the start of a track, fade out the end; "fade in and out" does both, each over
 * half the period. Crossfades need the same sample rate on both sides (as squeezelite). */
'use strict';
(function (G) {
  const LJ = G.LJ;

  const MODE = { NONE: 0, CROSSFADE: 1, FADE_IN: 2, FADE_OUT: 3, FADE_INOUT: 4, CROSSFADE_IMMEDIATE: 5 };
  const RELEASE_S = 3;   // play a held track end as it is once the output has less than this queued

  const isCross = (m) => m === MODE.CROSSFADE || m === MODE.CROSSFADE_IMMEDIATE;
  const frames = (blocks) => blocks.reduce((a, b) => a + b[0].length, 0);

  /** Join blocks of channel arrays into one array per channel. */
  function join(blocks, nch) {
    const n = frames(blocks), out = [];
    for (let c = 0; c < nch; c++) {
      const a = new Float32Array(n);
      let o = 0;
      for (const b of blocks) { a.set(b[Math.min(c, b.length - 1)], o); o += b[0].length; }
      out.push(a);
    }
    return out;
  }
  /** Frames [from, to) of one block. */
  const slice = (chans, from, to) => chans.map((a) => a.subarray(from, to));

  class Transitions {
    /** out: the output ({push(seq, rate, chans, bits), endSeq(seq), queuedSeconds()}). */
    constructor(out) { this.out = out; this.tracks = new Map(); this.mix = null; }

    /** A new stream: its transition, from its strm (type '0'..'5', period in seconds). */
    begin(seq, type, period) {
      const mode = +type || 0, secs = Math.max(0, +period || 0);
      const t = { seq, mode: secs > 0 ? mode : MODE.NONE, secs, rate: 0, bits: 16, nch: 0, seen: 0,
        hold: [], ended: false, endSent: false };
      // The track before it, if its end is waiting for a crossfade that isn't coming.
      if (!isCross(t.mode)) for (const p of this.tracks.values()) if (p.ended) this._release(p);
      this.tracks.set(seq, t);
    }

    _fadeInFrames(t) { return t.mode === MODE.FADE_IN ? t.secs * t.rate : t.mode === MODE.FADE_INOUT ? t.secs * t.rate / 2 : 0; }
    _holdFrames(t) {
      if (isCross(t.mode)) return t.secs * t.rate;
      if (t.mode === MODE.FADE_OUT) return t.secs * t.rate;
      if (t.mode === MODE.FADE_INOUT) return t.secs * t.rate / 2;
      return 0;
    }

    /** Decoded audio of track `seq` (gain already applied). */
    push(seq, rate, chans, bits) {
      const t = this.tracks.get(seq);
      if (!t) { this.out.push(seq, rate, chans, bits); return; }
      if (!chans[0].length) return;
      if (t.rate !== rate) { if (t.rate) this._flushHold(t); t.rate = rate; }
      t.bits = bits; t.nch = chans.length;
      // Fade in: a ramp over the first frames (the decoder's arrays are ours to change).
      const fin = Math.round(this._fadeInFrames(t));
      if (t.seen < fin) {
        const n = chans[0].length;
        for (let i = 0; i < n && t.seen + i < fin; i++) {
          const g = (t.seen + i + 0.5) / fin;
          for (const c of chans) c[i] *= g;
        }
      }
      const first = t.seen === 0;
      t.seen += chans[0].length;
      // The first audio of a track crossfading in from the one before.
      if (first) this._startMix(t);
      if (this.mix && this.mix.into === t) chans = this._mixIn(chans);
      if (!chans) return;
      const max = Math.round(this._holdFrames(t));
      if (!max) { this.out.push(seq, rate, chans, bits); return; }
      // Keep the last `max` frames back; anything older goes now.
      t.hold.push(chans);
      let extra = frames(t.hold) - max;
      while (extra > 0) {
        const b = t.hold[0], k = Math.min(extra, b[0].length);
        this.out.push(seq, rate, k === b[0].length ? b : slice(b, 0, k), bits);
        if (k === b[0].length) t.hold.shift(); else t.hold[0] = slice(b, k, b[0].length);
        extra -= k;
      }
    }

    /** The decoder has finished track `seq`: nothing more of it will come. */
    end(seq) {
      const t = this.tracks.get(seq);
      if (!t) { this.out.endSeq(seq); return; }
      t.ended = true;
      if (this.mix && this.mix.into === t) {
        // It ended inside its own crossfade (a very short track): what it has goes first, then
        // the rest of the track before, fading out alone. Nothing crossfades out of it.
        this._flushHold(t); this._finishMix(); this._sendEnd(t); this.check(); return;
      }
      if (t.mode === MODE.FADE_OUT || t.mode === MODE.FADE_INOUT) {
        // Fade out over what was held back (all of it: it was kept to exactly this length).
        const all = t.hold.length ? join(t.hold, t.nch) : null;
        t.hold = [];
        if (all) {
          const n = all[0].length;
          for (const c of all) for (let i = 0; i < n; i++) c[i] *= (n - i - 0.5) / n;
          this.out.push(t.seq, t.rate, all, t.bits);
        }
        this._sendEnd(t);
      } else if (!isCross(t.mode) || !t.hold.length) {
        this._flushHold(t); this._sendEnd(t);
      }
      // A crossfading track keeps its end until the next track (or the output running low).
      this.check();
    }

    /** Called often: let a held end go once the output is about to run out without it. */
    check() {
      for (const t of this.tracks.values()) {
        if (t.ended && !t.endSent && t.hold.length && this.out.queuedSeconds() < RELEASE_S) this._release(t);
      }
      for (const [seq, t] of this.tracks) if (t.endSent && !t.hold.length && !(this.mix && this.mix.into === t)) this.tracks.delete(seq);
    }

    /** Seconds held back here, not yet at the output. */
    heldSeconds() {
      let s = 0;
      for (const t of this.tracks.values()) if (t.rate) s += frames(t.hold) / t.rate;
      if (this.mix) s += (this.mix.a[0].length - this.mix.pos) / this.mix.rate;
      return s;
    }

    /** Track `seq` was dropped, but what it decoded still plays (a stream replaced by another). */
    stop(seq) {
      const t = this.tracks.get(seq);
      if (!t) { this.out.endSeq(seq); return; }
      if (this.mix && this.mix.into === t) { this._flushHold(t); this._finishMix(); }
      t.ended = true; this._release(t);
    }
    /** Everything after track `keep` was dropped from the output. */
    trim(keep) {
      if (this.mix && this.mix.into.seq > keep) {
        // The rest of the track it was crossfading out of plays as it is.
        const m = this.mix; this.mix = null;
        const rest = slice(m.a, m.pos, m.a[0].length);
        if (rest[0].length) this.out.push(m.from.seq, m.rate, rest, m.from.bits);
        this.out.endSeq(m.from.seq);
      }
      for (const seq of [...this.tracks.keys()]) if (seq > keep) this.tracks.delete(seq);
    }
    /** Everything was flushed. */
    clear() { this.tracks.clear(); this.mix = null; }

    // -- internals --------------------------------------------------------------

    _sendEnd(t) { if (!t.endSent) { t.endSent = true; this.out.endSeq(t.seq); } }
    _flushHold(t) {
      for (const b of t.hold) this.out.push(t.seq, t.rate, b, t.bits);
      t.hold = [];
    }
    _release(t) { this._flushHold(t); if (t.ended) this._sendEnd(t); }

    /** Track `t` has its first audio: crossfade from the track before, if both want it. */
    _startMix(t) {
      if (!isCross(t.mode)) return;
      let from = null;
      for (const p of this.tracks.values()) if (p !== t && p.ended && !p.endSent && p.hold.length) from = p;
      if (!from) return;
      if (from.rate !== t.rate) { this._release(from); return; }
      const held = join(from.hold, Math.max(from.nch, t.nch)); from.hold = [];
      const n = held[0].length, d = Math.min(n, Math.round(t.secs * t.rate));
      // Any of the held end beyond the crossfade length plays first, as it is.
      if (n > d) this.out.push(from.seq, from.rate, slice(held, 0, n - d), from.bits);
      this._sendEnd(from);
      this.mix = { from, into: t, a: slice(held, n - d, n), pos: 0, rate: t.rate };
    }

    /** Mix the start of the incoming track over the end of the outgoing one. */
    _mixIn(chans) {
      const m = this.mix, d = m.a[0].length, n = chans[0].length, k = Math.min(n, d - m.pos);
      for (let c = 0; c < chans.length; c++) {
        const a = m.a[Math.min(c, m.a.length - 1)], b = chans[c];
        for (let i = 0; i < k; i++) {
          const g = (m.pos + i + 0.5) / d;   // linear, as squeezelite: never louder than either side
          b[i] = a[m.pos + i] * (1 - g) + b[i] * g;
        }
      }
      m.pos += k;
      if (m.pos >= d) this.mix = null;
      return chans;
    }

    /** The incoming track ended inside the crossfade: the rest of the outgoing one fades out alone. */
    _finishMix() {
      const m = this.mix; this.mix = null;
      const d = m.a[0].length, rest = slice(m.a, m.pos, d);
      if (!rest[0].length) return;
      const n = rest[0].length, out = rest.map((a) => Float32Array.from(a));
      for (const c of out) for (let i = 0; i < n; i++) c[i] *= 1 - (m.pos + i + 0.5) / d;
      this.out.push(m.into.seq, m.rate, out, m.into.bits);
    }
  }

  Object.assign(LJ, { Transitions, TRANSITION: MODE, TRANSITION_RELEASE_S: RELEASE_S });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS core: the Slimproto player. Behaves towards LMS like squeezelite: it opens the
 * streams LMS asks for, decodes them, keeps the output fed and reports what is being heard.
 * Sans-I/O: the host supplies the control connection, streams, the output and the clock.
 *
 * Status events sent (STAT): STMc stream connecting, STMs track started (heard), STMd decoder
 * done (LMS then sends the next track), STMu played out, STMo output underrun, STMl loaded
 * (autostart off), STMp paused, STMr resumed, STMf flushed, STMt heartbeat, STMn can't play. */
'use strict';
(function (G) {
  const LJ = G.LJ;
  const { ByteQueue, concat, latin1, clientFrame, buildHelo, buildStat, parseStrm, parseAudg, parseHttpHead,
    nextServerFrame, ipString, IcyStripper } = LJ;
  const te = new TextEncoder();
  const td = new TextDecoder('utf-8', { fatal: false });

  const STREAM_WINDOW = 2 * 1024 * 1024;   // compressed bytes in flight per stream
  const DECODE_AHEAD_S = 10;                // seconds of PCM kept queued at the output
  const HEARTBEAT_MS = 1000;
  const MAX_HEAD = 64 * 1024;               // the HTTP response head of a stream
  const MAX_CORRECTION_MS = 10000;          // LMS sends at most 10 s pause/skip corrections
  const MAX_START_AHEAD_MS = 30000;         // a timed start further ahead isn't a real one
  const ACK_EVERY = 32 * 1024;

  /** DSCO reasons (why a stream ended). */
  const DSCO = { CLOSED: 0, RESET: 1, REMOTE_RESET: 2, UNREACHABLE: 3, TIMEOUT: 4 };
  /** The plugin's close codes that end this player here (docs/ARCHITECTURE.md). */
  const CLOSE = { REPLACED: 4000, DISABLED: 4403 };

  /** One stream LMS asked for, from connecting to its last sample. */
  class Track {
    constructor(seq, s, decoder) {
      this.seq = seq; this.format = s.format; this.autostart = s.autostart;
      this.threshold = s.threshold * 1024; this.gain = s.replayGain ? s.replayGain / 65536 : 1;
      this.decoder = decoder; this.stream = null; this.icy = null;
      this.head = new Uint8Array(0); this.headBytes = 0; this.bytes = 0; this.acked = 0; this.frames = 0;
      this.streamOpen = false;    // the stream may still deliver bytes
      this.headersDone = false;
      this.decoded = false;       // every sample has gone to the output (or never will)
      this.reported = false;      // LMS has had STMd (or STMn) for it
      this.dead = false;          // dropped: nothing more is played or reported
      this.describe = '';
    }
    /** Close the stream without reporting it (we chose to). */
    closeStream() {
      if (this.stream && this.streamOpen) { this.streamOpen = false; try { this.stream.close(); } catch (e) { /* closed */ } }
      this.streamOpen = false;
    }
    /** Drop for good: network closed, decoder aborted, nothing more reported. */
    kill() {
      this.closeStream(); this.dead = true; this.decoded = true; this.reported = true;
      if (this.decoder && this.decoder.abort) this.decoder.abort();
    }
  }

  class SlimPlayer {
    /**
     * opts: {
     *   mac: Uint8Array(6), uuid?: Uint8Array(16), name: string,
     *   openControl(): control, openStream({ip, port, win}): stream, output, now(): ms,
     *   caps: string[], maxRate: number, decoders: { [format]: (strm) => decoder },
     *   decodeAhead?: s, pumpBudget?: n, noTimer?: bool, log?: fn }
     * control: { send(u8), close(), onopen (a new session: send HELO), onresumed (the same session
     *            after a gap), ondata(u8, replayed), onclose (the session is over) }
     * stream:  { send(u8), ack(n), close(), onopen, ondata(u8), onclose(clean) }
     * output:  { push(seq, rate, chans, bits), endSeq(seq), play(), pause(), startAt(ms), pauseFor(ms),
     *            skip(ms), flush(), trimAfter(seq), setGain(g), setMute(b), queuedSeconds(),
     *            audible(nowMs) -> {seq, ms} | null, underrun, rate, onReport }
     *   now() must be monotonic and the output's own clock: it is also the jiffies.
     */
    constructor(opts) {
      this.mac = opts.mac; this.uuid = opts.uuid; this.name = opts.name;
      this.openControl = opts.openControl; this.openStream = opts.openStream;
      this.output = opts.output; this.now = opts.now; this.caps = opts.caps || []; this.maxRate = opts.maxRate || 96000;
      this.firmware = String(opts.firmware || 'lyrionjs').replace(/[,=]/g, '');   // shown as the player's firmware in LMS
      this.decoders = opts.decoders || {}; this.decodeAhead = opts.decodeAhead || DECODE_AHEAD_S;
      this.pumpBudget = opts.pumpBudget || 12; this.noTimer = !!opts.noTimer; this.log = opts.log || (() => {});
      this.onStat = null; this.onStrm = null;

      this.state = 'stopped';   // stopped | waiting | loaded | playing | paused
      this.tracks = [];
      this.seq = 0; this.ctl = null; this.connected = false; this.everConnected = false;
      this.audibleSeq = null; this.stmsSent = new Set(); this.stmuSent = true; this.stmoSent = false;
      this.stmsOwed = null; this.stmuOwed = false;   // raised while the control was down: sent after HELO
      this.lastStat = 0; this.backoff = 1000; this.serverVersion = ''; this.gain = 1; this.enabled = true;
      this.listeners = new Set(); this.stopped = true; this.pumping = false; this.pumpQueued = false; this.lastError = '';
      this.rx = new ByteQueue(8192); this.rxIn = 0; this.rxPos = 0; this.replayEnd = 0;
      this.tx = new LJ.Transitions(this.output);   // crossfades and fades, between decoders and output
      this.output.onReport = () => this.tick();
    }

    on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    emit(what) { for (const fn of this.listeners) { try { fn(what, this); } catch (e) { this.log('listener', e); } } }

    start() {
      if (!this.stopped) return;
      this.stopped = false; this._connect();
      if (!this.timer && G.setInterval && !this.noTimer) this.timer = G.setInterval(() => this.tick(), 100);
    }
    stop() {
      this.stopped = true; this._flush();
      if (this.ctl) { this._send(clientFrame('BYE!', new Uint8Array([0]))); try { this.ctl.close(); } catch (e) { /* closed */ } }
      this.ctl = null; this.connected = false;
      if (this.timer) { G.clearInterval(this.timer); this.timer = null; }
    }

    capabilities() {
      return ['Model=squeezelite', 'ModelName=LyrionJS', 'AccuratePlayPoints=1', 'HasDigitalOut=0',
        'HasPolarityInversion=0', 'Balance=0', 'Firmware=' + this.firmware, 'MaxSampleRate=' + this.maxRate].concat(this.caps).join(',');
    }

    // -- the control connection -------------------------------------------------

    _connect() {
      const t = this.openControl();
      this.ctl = t;
      // The same session after a gap: LMS never saw us leave. Tell it where we are now (held
      // heartbeats are never sent: LMS re-bases its clock on each one).
      t.onresumed = () => { if (this.ctl === t) { this.connected = true; this._stat('STMt'); this.emit('connected'); } };
      t.onopen = () => {
        if (this.ctl !== t) return;
        // A new session: anything left of a frame from the old one is meaningless now.
        this.rx.clear(); this.rxIn = this.rxPos = this.replayEnd = 0;
        this.connected = true; this.backoff = 1000;
        const cur = this.tracks[this.tracks.length - 1];
        this._send(buildHelo({ mac: this.mac, uuid: this.uuid, reconnect: this.everConnected && this.state !== 'stopped',
          bytesReceived: cur ? cur.bytes : 0, caps: this.capabilities() }));
        this.everConnected = true; this._sendOwed(); this.emit('connected');
      };
      t.ondata = (d, replayed) => {
        if (this.ctl !== t) return;
        this.rx.push(d); this.rxIn += d.length;
        if (replayed) this.replayEnd = this.rxIn;
        this._control();
      };
      t.onclose = (code) => {
        if (this.ctl !== t) return;
        this.connected = false; this.emit('disconnected');
        if (this.stopped) return;
        // The plugin's close codes (docs/ARCHITECTURE.md): another session took this player, or
        // browser players are switched off. Connecting again would only fight it, or be refused.
        if (code === CLOSE.REPLACED || code === CLOSE.DISABLED) {
          this.lastError = code === CLOSE.REPLACED ? 'Another session took this player' : 'Browser players are switched off in LMS';
          this.stop(); this.emit(code === CLOSE.REPLACED ? 'replaced' : 'disabled');
          return;
        }
        const wait = this.backoff; this.backoff = Math.min(this.backoff * 2, 15000);
        G.setTimeout(() => { if (!this.stopped && this.ctl === t) this._connect(); }, wait);
      };
    }

    /** False if there is no session to send it on (the frame is dropped). */
    _send(frame) { if (!this.ctl || !this.connected) return false; this.ctl.send(frame); return true; }

    _control() {
      for (;;) {
        const before = this.rx.length, start = this.rxPos;
        const f = nextServerFrame(this.rx);
        if (!f) return;
        this.rxPos += before - this.rx.length;
        if (!f.op) continue;   // skipped (malformed or oversize)
        // A frame that began in the replayed bytes describes the past.
        const replayed = start < this.replayEnd;
        try { this._handle(f.op, f.payload, replayed); } catch (e) { this.log('handling ' + f.op, e); }
      }
    }

    _handle(op, p, replayed) {
      switch (op) {
        case 'strm': this._strm(parseStrm(p), replayed); break;
        case 'audg': { const a = parseAudg(p); this.gain = (a.left + a.right) / 2; this.output.setGain(this.gain); this.emit('volume'); break; }
        case 'aude': this.enabled = p.length > 1 ? p[1] !== 0 : true; this.output.setMute(!this.enabled); this.emit('power'); break;
        case 'setd':
          if (p[0] === 0) {
            if (p.length === 1) this._send(clientFrame('SETD', concat(new Uint8Array([0]), te.encode(this.name + '\0'))));
            else { this.name = td.decode(p.subarray(1)).replace(/\0[\s\S]*$/, ''); this.emit('name'); }
          }
          break;
        case 'vers': this.serverVersion = latin1(p); break;
        case 'serv': break;   // stay on the server the user chose
        default: break;       // display, IR, visualiser: not for a headless player
      }
    }

    // -- status -------------------------------------------------------------

    _elapsed(now) {
      if (this.state !== 'playing' && this.state !== 'paused') return 0;
      const a = this.output.audible(now);
      return a && a.seq === this.audibleSeq ? a.ms : 0;
    }

    _stat(event, serverTs = 0) {
      if (!this.ctl || !this.connected) return false;
      const now = this.now();
      const cur = this.tracks[this.tracks.length - 1];
      const rate = this.output.rate || 44100;
      this._send(buildStat({
        event, bufSize: STREAM_WINDOW, bufFull: cur && cur.decoder ? Math.min(cur.decoder.buffered, STREAM_WINDOW) : 0,
        bytesReceived: cur ? cur.bytes : 0, jiffies: Math.floor(now),
        outSize: this.decodeAhead * rate * 8, outFull: Math.floor(this.output.queuedSeconds() * rate * 8),
        elapsedMs: this._elapsed(now), serverTs,
      }));
      this.lastStat = now;
      if (this.onStat) this.onStat(event);
      return true;
    }

    /** STMs, STMd and STMu that LMS must not miss: raised between sessions, they wait for the next. */
    _sendOwed() {
      const s = this.stmsOwed;
      if (s != null && !this.stmsSent.has(s)) { if (!this._stat('STMs')) return; this.stmsSent.add(s); }
      this.stmsOwed = null;
      this._readyForNext();
      if (this.stmuOwed && this._stat('STMu')) this.stmuOwed = false;
    }

    // -- stream commands ----------------------------------------------------

    _strm(s, replayed) {
      if (this.onStrm) this.onStrm(s);
      if (replayed) {
        // Sent while we were away: corrections and polls describe a moment already past, and
        // applied late they would make the player jump. A timed start becomes "start now".
        if (s.command === 'a' || s.command === 't' || (s.command === 'p' && s.replayGain !== 0)) return;
        if (s.command === 'u') s = Object.assign({}, s, { replayGain: 0 });
      }
      switch (s.command) {
        case 's': this._startTrack(s); break;
        case 'p':
          if (s.replayGain === 0) {
            if (this.state !== 'stopped') { this.state = 'paused'; this.output.pause(); }
            this._stat('STMp'); this.emit('state');
          } else if (this.state === 'playing') {
            this.output.pauseFor(Math.min(s.replayGain, MAX_CORRECTION_MS));   // a sync correction
          }
          break;
        case 'u': {
          if (this.tracks.length) {
            const now = this.now();
            const ahead = (s.replayGain - Math.floor(now)) | 0;   // a time in our jiffies (wraps at 2^32)
            if (s.replayGain !== 0 && ahead > 0 && ahead <= MAX_START_AHEAD_MS) this.output.startAt(Math.floor(now) + ahead);
            else this.output.play();
            this.state = 'playing'; this.stmuSent = false;
          }
          this._stat('STMr'); this.emit('state');
          break;
        }
        case 'q': this._flush(); this._stat('STMf'); this.emit('state'); break;
        case 'f': {
          // The next track (already streamed) was moved or deleted: drop what came after the
          // audible track, and carry on playing it.
          const keep = this.audibleSeq;
          if (keep == null) this._flush();
          else {
            for (const t of this.tracks) if (t.seq > keep) t.kill();
            this.tracks = this.tracks.filter((t) => t.seq <= keep);
            this.output.trimAfter(keep); this.tx.trim(keep);
          }
          this._stat('STMf'); break;
        }
        case 't': this._stat('STMt', s.replayGain); break;
        case 'a': if (this.state === 'playing') this.output.skip(Math.min(s.replayGain, MAX_CORRECTION_MS)); break;
        default: break;
      }
    }

    _startTrack(s) {
      const seq = ++this.seq;
      // A new stream while one is still arriving replaces it. What it already decoded still
      // plays; it is never reported (LMS has moved on). A finished stream still decoding is the
      // previous track playing out (gapless), and carries on.
      for (const t of this.tracks) if (t.streamOpen) { t.kill(); this.tx.stop(t.seq); }
      const make = this.decoders[s.format];
      const track = new Track(seq, s, make ? make(s) : null);
      this.tracks.push(track);
      this.tx.begin(seq, s.transType, s.transPeriod);
      this.stmuSent = false; this.stmuOwed = false; this.stmoSent = false; this.lastError = '';
      if (!track.decoder) {
        track.decoded = track.reported = true;
        this.lastError = 'Unsupported format ' + s.format;
        this.tx.stop(seq); this._stat('STMn'); return;
      }
      const dec = track.decoder;
      dec.onError = (msg) => { if (!track.dead) this._failTrack(track, msg); };
      dec.onBlock = (rate, chans) => {
        if (track.dead) return;   // late output from an asynchronous decoder
        if (track.gain !== 1) for (const c of chans) for (let i = 0; i < c.length; i++) c[i] *= track.gain;
        track.frames += chans[0].length;
        this.tx.push(seq, rate, chans, dec.outBits || 16);
      };
      dec.onFinished = () => this.pump();
      // Server address 0 means LMS itself (always the case for proxied streams).
      const st = this.openStream({ ip: s.serverIp ? ipString(s.serverIp) : null, port: s.serverPort, win: STREAM_WINDOW });
      track.stream = st; track.streamOpen = true;
      st.onopen = () => st.send(s.request);
      st.ondata = (d) => { if (!track.dead) this._streamData(track, d); };
      st.onclose = (clean) => {
        if (!track.streamOpen || track.dead) return;
        track.streamOpen = false;
        this._send(clientFrame('DSCO', new Uint8Array([clean ? DSCO.CLOSED : DSCO.REMOTE_RESET])));
        if (!track.headersDone) { this._failTrack(track, 'Stream failed'); return; }
        dec.end();
        this.pump();
      };
      this._stat('STMc');
      if (this.state === 'stopped') this.state = 'waiting';
      this.emit('track');
    }

    _streamData(track, d) {
      if (!track.headersDone) {
        track.head = concat(track.head, d);
        const h = parseHttpHead(track.head);
        if (!h) { if (track.head.length > MAX_HEAD) this._failTrack(track, 'Stream sent no HTTP response'); return; }
        track.headersDone = true;
        track.headBytes = h.headLen;   // header bytes count as consumed for flow control
        this._send(clientFrame('RESP', h.raw));
        if (h.status >= 400) { this._failTrack(track, 'Stream refused: HTTP ' + h.status); return; }
        const metaint = +(h.headers['icy-metaint'] || 0);
        if (metaint > 0) track.icy = new IcyStripper(metaint);
        d = track.head.subarray(h.headLen); track.head = null;
        if (!d.length) return;
      }
      track.bytes += d.length;
      if (track.decoded) { this._ack(track); return; }   // past the end of the audio (a WAV trailer)
      if (track.icy) track.icy.feed(d, (a) => track.decoder.feed(a), (m) => this._send(clientFrame('META', m)));
      else track.decoder.feed(d);
      this.pump();
    }

    /** A stream or decoder that can't be played: tell LMS, as squeezelite does, so it moves on. */
    _failTrack(track, why) {
      this.lastError = why;
      const wasOpen = track.streamOpen;
      track.kill();
      this.tx.stop(track.seq);
      if (wasOpen) this._send(clientFrame('DSCO', new Uint8Array([DSCO.REMOTE_RESET])));
      this._stat('STMn');
      this._nothingToPlay(track);
    }

    /**
     * The newest track ended without a sound and nothing else is queued: stop, as squeezelite
     * does once its output runs dry (with STMu, unless the track already failed with STMn).
     */
    _nothingToPlay(track, event) {
      if (track !== this.tracks[this.tracks.length - 1] || track.frames || this.output.queuedSeconds() + this.tx.heldSeconds() > 0) return;
      if (this.state !== 'waiting' && this.state !== 'loaded') return;
      this.state = 'stopped'; this.stmuSent = true; this.audibleSeq = null;
      if (event) this.stmuOwed = !this._stat(event);
      this.emit('state');
    }

    _ack(track) {
      if (!track.stream || !track.streamOpen) return;
      // A decoder that is done wants nothing more: all that was delivered counts as consumed.
      const held = track.decoded ? 0 : track.decoder.buffered;
      const consumed = track.headBytes + track.bytes - held;
      if (consumed - track.acked >= ACK_EVERY || (held === 0 && consumed > track.acked)) {
        track.acked = consumed; track.stream.ack(consumed);
      }
    }

    _flush() {
      for (const t of this.tracks) t.kill();
      this.tracks = []; this.output.flush(); this.tx.clear(); this.state = 'stopped'; this.audibleSeq = null;
      this.stmuSent = true; this.stmsOwed = null; this.stmuOwed = false; this.stmoSent = false;
    }

    // -- decoding -------------------------------------------------------------

    /** Decode while the output wants audio, a bounded amount per call. */
    pump() {
      if (this.pumping) return;
      this.pumping = true;
      let again = false;
      try {
        let budget = this.pumpBudget;
        while (this.output.queuedSeconds() < this.decodeAhead) {
          if (budget-- <= 0) { again = true; break; }
          const t = this.tracks.find((x) => !x.decoded);
          if (!t) break;
          let r;
          try { r = t.decoder.pump(16); }
          catch (e) { this.log('decoder', e); this._failTrack(t, 'Decoding failed: ' + (e && e.message || e)); continue; }
          this._ack(t);
          if (!t.describe && t.decoder.describe) t.describe = t.decoder.describe() || '';
          if (r === 'done') {
            if (t.dead) continue;   // failed while pumping (onError)
            t.decoded = true; this.tx.end(t.seq); this._ack(t); this._readyForNext(); this._nothingToPlay(t, 'STMu');
            continue;
          }
          if (r === 'need') break;
        }
        this.tx.check();   // a held track end goes once the output runs low without it
        this._autostart();
      } finally { this.pumping = false; }
      if (again && !this.pumpQueued) { this.pumpQueued = true; G.setTimeout(() => { this.pumpQueued = false; this.pump(); }, 0); }
    }

    /**
     * STMd ("decoder done": LMS then sends the next track) goes only once the track has been
     * heard. LMS takes the next STMs to mean the newest stream started, so if a short stream
     * (the tail after a seek) finished decoding before its audio was audible, LMS would move
     * on to the next track too early. A track that produced no audio at all goes at once.
     */
    _readyForNext() {
      for (const t of this.tracks) {
        if (!t.decoded || t.reported || t.dead) continue;
        if (this.stmsSent.has(t.seq) || !t.frames) { if (!this._stat('STMd')) return; t.reported = true; }
      }
    }

    _autostart() {
      if (this.state !== 'waiting') return;
      const t = this.tracks[this.tracks.length - 1];
      if (!t) return;
      const ready = (t.bytes >= t.threshold || !t.streamOpen || t.decoded) && this.output.queuedSeconds() > 0;
      if (!ready) return;
      if (t.autostart === '1' || t.autostart === '3') { this.state = 'playing'; this.output.play(); this.emit('state'); }
      else { this.state = 'loaded'; this._stat('STMl'); this.emit('state'); }
    }

    /** Runs on a timer and on every output report. */
    tick() {
      const now = this.now();
      if (this.state === 'playing' || this.state === 'paused') {
        const a = this.output.audible(now);
        if (a && a.seq != null && a.seq !== this.audibleSeq) {
          this.audibleSeq = a.seq;
          if (!this.stmsSent.has(a.seq)) { this.stmsOwed = a.seq; this._sendOwed(); }
          // Tracks heard to the end are no longer of interest.
          this.tracks = this.tracks.filter((t) => t.seq >= a.seq || !t.decoded);
          for (const seq of this.stmsSent) if (seq < a.seq) this.stmsSent.delete(seq);
          this.emit('track');
        }
        if (this.state === 'playing' && this.output.underrun) {
          const allDone = this.tracks.every((t) => t.decoded);
          if (allDone && !this.stmuSent) {
            this.stmuSent = true; this.state = 'stopped'; this.stmuOwed = !this._stat('STMu'); this.audibleSeq = null; this.emit('state');
          } else if (!allDone && !this.stmoSent && this.audibleSeq != null) {
            this.stmoSent = true; this._stat('STMo');
          }
        } else if (!this.output.underrun) {
          this.stmoSent = false;
        }
        if (this.state === 'playing' && now - this.lastStat >= HEARTBEAT_MS) this._stat('STMt');
      }
      this.pump();
    }

    /** What the UI shows about the local player. */
    snapshot() {
      const now = this.now();
      const a = this.output.audible(now);
      const t = this.tracks.find((x) => x.seq === (a && a.seq)) || this.tracks[this.tracks.length - 1];
      return {
        state: this.state, connected: this.connected, elapsedMs: this._elapsed(now), format: t ? t.describe : '',
        queued: this.output.queuedSeconds(), gain: this.gain, enabled: this.enabled, error: this.lastError,
      };
    }
  }

  Object.assign(LJ, { SlimPlayer, Track, STREAM_WINDOW, DECODE_AHEAD_S, DSCO });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS output: PCM -> FLAC "verbatim" frames (uncompressed, bit-exact) -> fragmented MP4,
 * for the media-element output (output/media.js). No DOM; tested under Node against ffmpeg. */
'use strict';
(function (G) {
  const LJ = G.LJ || (G.LJ = {});

  // ---------------------------------------------------------------------------
  // FLAC verbatim frames
  // ---------------------------------------------------------------------------
  const CRC8 = new Uint8Array(256), CRC16 = new Uint16Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i; for (let j = 0; j < 8; j++) c = (c & 0x80) ? ((c << 1) ^ 0x07) & 0xff : (c << 1) & 0xff; CRC8[i] = c;
    let d = i << 8; for (let j = 0; j < 8; j++) d = (d & 0x8000) ? ((d << 1) ^ 0x8005) & 0xffff : (d << 1) & 0xffff; CRC16[i] = d;
  }
  const SIZE_CODE = { 8: 1, 12: 2, 16: 4, 20: 5, 24: 6 };

  class BitWriter {
    constructor(n) { this.b = new Uint8Array(n); this.pos = 0; this.acc = 0; this.nacc = 0; }
    bits(v, n) { // n <= 24
      this.acc = (this.acc * (1 << n)) + (v & ((1 << n) - 1)); this.nacc += n;
      while (this.nacc >= 8) { this.nacc -= 8; this.b[this.pos++] = Math.floor(this.acc / (1 << this.nacc)) & 0xff; this.acc %= (1 << this.nacc); }
    }
    align() { if (this.nacc) this.bits(0, 8 - this.nacc); }
    byte(v) { this.b[this.pos++] = v; }
  }

  /** Encode one frame of `n` samples per channel from int arrays, starting at `sample`. */
  function flacVerbatimFrame(chans, off, n, bits, sample) {
    const w = new BitWriter(32 + Math.ceil(n * chans.length * bits / 8) + chans.length + 4);
    // Variable block size, so the sample number (not a frame number) is coded.
    w.byte(0xff); w.byte(0xf9);
    w.bits(7, 4);                          // block size: 16 bits at the end of the header
    w.bits(0, 4);                          // sample rate: from STREAMINFO
    w.bits(chans.length - 1, 4);           // independent channels
    w.bits(SIZE_CODE[bits], 3); w.bits(0, 1);
    // UTF-8-style coded sample number (up to 36 bits).
    if (sample < 0x80) w.byte(sample);
    else {
      let len = 2; while (sample >= 2 ** (5 * len + 1)) len++;
      const lead = (0xff00 >> len) & 0xff;
      w.byte(lead | Math.floor(sample / 2 ** (6 * (len - 1))));
      for (let i = len - 2; i >= 0; i--) w.byte(0x80 | (Math.floor(sample / 2 ** (6 * i)) & 0x3f));
    }
    w.byte((n - 1) >> 8); w.byte((n - 1) & 0xff);
    let c8 = 0; for (let i = 0; i < w.pos; i++) c8 = CRC8[c8 ^ w.b[i]];
    w.byte(c8);
    for (const ch of chans) {
      w.byte(0x02);                        // verbatim subframe, no wasted bits
      if (bits === 16) for (let i = 0; i < n; i++) { const v = ch[off + i]; w.byte((v >> 8) & 0xff); w.byte(v & 0xff); }
      else if (bits === 24) for (let i = 0; i < n; i++) { const v = ch[off + i]; w.byte((v >> 16) & 0xff); w.byte((v >> 8) & 0xff); w.byte(v & 0xff); }
      else for (let i = 0; i < n; i++) w.bits(ch[off + i], bits);
    }
    w.align();
    let c16 = 0; for (let i = 0; i < w.pos; i++) c16 = ((c16 << 8) ^ CRC16[(c16 >> 8) ^ w.b[i]]) & 0xffff;
    w.byte(c16 >> 8); w.byte(c16 & 0xff);
    return w.b.slice(0, w.pos);
  }

  function streamInfo(rate, channels, bits, maxBlock) {
    const b = new Uint8Array(34);
    b[0] = 0; b[1] = 16;                                  // min block size
    b[2] = maxBlock >> 8; b[3] = maxBlock & 0xff;         // max block size
    // min/max frame size unknown (0); total samples unknown (0); MD5 unset (0).
    b[10] = (rate >> 12) & 0xff; b[11] = (rate >> 4) & 0xff;
    b[12] = ((rate & 0x0f) << 4) | ((channels - 1) << 1) | ((bits - 1) >> 4);
    b[13] = ((bits - 1) & 0x0f) << 4;
    return b;
  }

  // ---------------------------------------------------------------------------
  // Fragmented MP4 (ISO BMFF) with one FLAC track
  // ---------------------------------------------------------------------------
  const enc = (s) => Array.from(s, (c) => c.charCodeAt(0));
  const u32 = (v) => [(v >>> 24) & 255, (v >>> 16) & 255, (v >>> 8) & 255, v & 255];
  const u16 = (v) => [(v >> 8) & 255, v & 255];
  const u64 = (v) => u32(Math.floor(v / 4294967296)).concat(u32(v >>> 0));
  function box(type, ...parts) {
    let len = 8; for (const p of parts) len += p.length;
    const out = new Uint8Array(len);
    out.set(u32(len), 0); out.set(enc(type), 4);
    let o = 8; for (const p of parts) { out.set(p, o); o += p.length; }
    return out;
  }
  const full = (type, version, flags, ...parts) => box(type, [version, (flags >> 16) & 255, (flags >> 8) & 255, flags & 255], ...parts);
  const MATRIX = [].concat(u32(0x00010000), u32(0), u32(0), u32(0), u32(0x00010000), u32(0), u32(0), u32(0), u32(0x40000000));

  const Mp4 = {
    init(rate, channels, bits, maxBlock) {
      const dfla = full('dfLa', 0, 0, [0x80, 0, 0, 34], streamInfo(rate, channels, bits, maxBlock));
      const entry = box('fLaC', [0, 0, 0, 0, 0, 0], u16(1), new Array(8).fill(0), u16(channels), u16(bits), u16(0), u16(0),
        u32(rate <= 65535 ? rate * 65536 : 0), dfla);
      const stbl = box('stbl', full('stsd', 0, 0, u32(1), entry), full('stts', 0, 0, u32(0)), full('stsc', 0, 0, u32(0)),
        full('stsz', 0, 0, u32(0), u32(0)), full('stco', 0, 0, u32(0)));
      const minf = box('minf', full('smhd', 0, 0, u16(0), u16(0)), box('dinf', full('dref', 0, 0, u32(1), full('url ', 0, 1))), stbl);
      const mdia = box('mdia', full('mdhd', 0, 0, u32(0), u32(0), u32(rate), u32(0), u16(0x55c4), u16(0)),
        full('hdlr', 0, 0, u32(0), enc('soun'), u32(0), u32(0), u32(0), enc('LyrionJS\0')), minf);
      const trak = box('trak', full('tkhd', 0, 3, u32(0), u32(0), u32(1), u32(0), u32(0), u32(0), u32(0), u16(0), u16(0), u16(0x0100), u16(0), MATRIX, u32(0), u32(0)), mdia);
      const mvhd = full('mvhd', 0, 0, u32(0), u32(0), u32(1000), u32(0), u32(0x00010000), u16(0x0100), u16(0), u32(0), u32(0), MATRIX, new Array(24).fill(0), u32(2));
      const mvex = box('mvex', full('trex', 0, 0, u32(1), u32(1), u32(0), u32(0), u32(0)));
      const ftyp = box('ftyp', enc('isom'), u32(0), enc('isom'), enc('iso6'), enc('mp41'));
      const moov = box('moov', mvhd, trak, mvex);
      const out = new Uint8Array(ftyp.length + moov.length); out.set(ftyp); out.set(moov, ftyp.length);
      return out;
    },
    /** One moof + mdat. frames: [{data: Uint8Array, samples}]; baseTime in samples. */
    fragment(seqNo, baseTime, frames) {
      let dataLen = 0; for (const f of frames) dataLen += f.data.length;
      const entries = []; for (const f of frames) entries.push(...u32(f.samples), ...u32(f.data.length));
      const mk = (offset) => box('moof', full('mfhd', 0, 0, u32(seqNo)),
        box('traf', full('tfhd', 0, 0x020000, u32(1)), full('tfdt', 1, 0, u64(baseTime)),
          full('trun', 0, 0x000301, u32(frames.length), u32(offset), entries)));
      const moofLen = mk(0).length;
      const moof = mk(moofLen + 8);
      const out = new Uint8Array(moof.length + 8 + dataLen);
      out.set(moof); out.set(u32(8 + dataLen), moof.length); out.set(enc('mdat'), moof.length + 4);
      let o = moof.length + 8; for (const f of frames) { out.set(f.data, o); o += f.data.length; }
      return out;
    },
  };

  /** Float samples to ints of `bits`: exact for audio decoded from integers of that size. */
  function toInts(chans, bits) {
    const scale = 2 ** (bits - 1), max = scale - 1, min = -scale;
    return chans.map((c) => {
      const o = new Int32Array(c.length);
      for (let i = 0; i < c.length; i++) { const v = Math.round(c[i] * scale); o[i] = v > max ? max : v < min ? min : v; }
      return o;
    });
  }

  /**
   * Turns PCM into appendable MP4: an init segment whenever the format changes, then fragments.
   * Keeps its own sample clock so the timeline is continuous across tracks.
   */
  class Fmp4Writer {
    constructor({ block = 4096, fragmentFrames = 12 } = {}) {
      this.block = block; this.fragmentFrames = fragmentFrames;
      this.fmt = null; this.pending = null; this.frames = []; this.sample = 0; this.base = 0; this.seqNo = 0;
    }
    /** Seconds of audio pushed (in fragments, in frames not yet in one, or pending) on this writer's timeline. */
    get end() { return this.fmt ? (this.base + this.sample + this._heldSamples() + this._pendingFrames()) / this.fmt.rate : this.startAt || 0; }
    /** Seconds of audio returned as fragments: the most the media element can have to play. */
    get written() { return this.fmt ? (this.base + this.sample) / this.fmt.rate : this.startAt || 0; }
    _pendingFrames() { return this.pending ? this.pending.len : 0; }
    _heldSamples() { let n = 0; for (const f of this.frames) n += f.samples; return n; }
    /** Start writing at `t` seconds on the media timeline (after a flush or a new format). */
    restart(t) { this.fmt = null; this.pending = null; this.frames = []; this.startAt = t; }
    /** Add PCM; returns segments ready to append ({init} or {data, start, end}). */
    push(rate, chans, bits) {
      const out = [];
      bits = SIZE_CODE[bits] ? bits : (bits > 16 ? 24 : 16);
      const channels = chans.length === 1 ? 1 : 2;
      if (!this.fmt || this.fmt.rate !== rate || this.fmt.bits !== bits || this.fmt.channels !== channels) {
        const t = this.end;
        out.push(...this.flush());
        this.fmt = { rate, bits, channels };
        this.base = Math.round(t * rate); this.sample = 0;
        out.push({ init: Mp4.init(rate, channels, bits, this.block), rate });
      }
      const ints = toInts(chans.slice(0, channels), bits);
      // Join onto the partial block left from last time.
      let src = ints, n = ints[0].length;
      if (this.pending) {
        src = ints.map((c, i) => { const o = new Int32Array(this.pending.len + n); o.set(this.pending.chans[i].subarray(0, this.pending.len)); o.set(c, this.pending.len); return o; });
        n += this.pending.len; this.pending = null;
      }
      let off = 0;
      while (n - off >= this.block) { this._frame(src, off, this.block); off += this.block; }
      if (off < n) this.pending = { chans: src.map((c) => c.slice(off)), len: n - off };
      if (this.frames.length >= this.fragmentFrames) out.push(this._fragment());
      return out;
    }
    /** Write out everything, including a partial last block. */
    flush() {
      const out = [];
      if (this.pending && this.pending.len) { this._frame(this.pending.chans, 0, this.pending.len); }
      this.pending = null;
      if (this.frames.length) out.push(this._fragment());
      return out;
    }
    _frame(chans, off, n) {
      const f = this.fmt;
      this.frames.push({ data: flacVerbatimFrame(chans, off, n, f.bits, this.sample + this._heldSamples()), samples: n });
    }
    _fragment() {
      const start = this.base + this.sample;
      let count = 0; for (const f of this.frames) count += f.samples;
      const data = Mp4.fragment(++this.seqNo, start, this.frames);
      this.frames = []; this.sample += count;
      return { data, start: start / this.fmt.rate, end: (start + count) / this.fmt.rate };
    }
  }

  Object.assign(LJ, { flacVerbatimFrame, streamInfo, Mp4, Fmp4Writer, toInts });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS output: an <audio> element fed by (Managed) Media Source, for phones and tablets.
 *
 * Web Audio stops when an iPhone or iPad locks its screen; a media element doesn't. Decoded
 * audio is re-wrapped losslessly as FLAC in fragmented MP4 (output/fmp4.js) and appended to a
 * SourceBuffer. The output offers the same interface as the Web Audio output (see
 * output/webaudio.js), so the Slimproto player can't tell which one it drives. */
'use strict';
(function (G) {
  const LJ = G.LJ;
  const MIME = 'audio/mp4; codecs="flac"';
  // 50 ms of silence (8 kHz, 8-bit). It must hold samples: Firefox refuses a WAV with none, and the
  // tap that should unlock sound then does nothing.
  const SILENT_WAV = 'data:audio/wav;base64,UklGRrQBAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YZABAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA';
  const KEEP_BEHIND_S = 10;      // played audio kept buffered (for small skips back)
  const FULL_KEEP_S = 1;         // …and when the buffer is full
  const EVICT_EVERY_MS = 5000;
  const UNLOCK_TIMEOUT_MS = 2500;
  const FAIL_LIMIT = 3, FAIL_WINDOW_MS = 10000;   // media source failures before giving up

  const mediaSourceClass = () => G.ManagedMediaSource || G.MediaSource || null;

  /** Can this browser play our FLAC-in-MP4 through a media element? */
  function mediaSupported() {
    const MS = mediaSourceClass();
    try { return !!(MS && MS.isTypeSupported && MS.isTypeSupported(MIME)); } catch (e) { return false; }
  }

  /** Does the page control an <audio> element's volume? (iOS ignores it: the device sets it.) */
  function volumeWorks() {
    try { const a = new Audio(); a.volume = 0.5; return Math.abs(a.volume - 0.5) < 0.01; } catch (e) { return false; }
  }

  /** Appends a second of silence through the real pipeline; resolves true if the browser takes it. */
  function selfTest() {
    return new Promise((resolve) => {
      const MS = mediaSourceClass();
      if (!MS || !mediaSupported()) return resolve(false);
      try { run(MS, resolve); } catch (e) { resolve(false); }   // a browser that throws can't use it
    });
    function run(MS, resolve) {
      const el = document.createElement('audio');
      el.muted = true; el.disableRemotePlayback = true;
      const ms = new MS();
      const url = URL.createObjectURL(ms);
      let settled = false;
      const done = (ok) => {
        if (settled) return; settled = true;
        clearTimeout(t); el.removeAttribute('src'); try { el.load(); } catch (e) { /* */ } URL.revokeObjectURL(url); resolve(ok);
      };
      const t = setTimeout(() => done(false), 3000);
      ms.addEventListener('sourceopen', () => {
        try {
          const sb = ms.addSourceBuffer(MIME);
          const w = new LJ.Fmp4Writer();
          const segs = [...w.push(44100, [new Float32Array(44100), new Float32Array(44100)], 16), ...w.flush()];
          let i = 0;
          const next = () => {
            if (i >= segs.length) return done(sb.buffered.length > 0 && sb.buffered.end(0) > 0.5);
            const s = segs[i++]; sb.appendBuffer(s.init || s.data);
          };
          sb.addEventListener('updateend', next);
          sb.addEventListener('error', () => done(false));
          next();
        } catch (e) { done(false); }
      }, { once: true });
      el.src = url;
    }
  }

  /**
   * Every SourceBuffer operation, one at a time. A SourceBuffer accepts nothing while it is
   * updating, and an operation issued then is lost (or throws); queueing them all keeps appends,
   * removes and format changes in order whatever the browser's timing.
   */
  class SourceBufferQueue {
    constructor({ diag, onQuota }) { this.sb = null; this.ops = []; this.inits = 0; this.diag = diag; this.onQuota = onQuota; this.full = false; }
    attach(sb) { this.sb = sb; this.inits = 0; sb.addEventListener('updateend', () => this.run()); this.run(); }
    detach() { this.sb = null; }
    push(op) { this.ops.push(op); this.run(); }
    /** Ahead of everything queued: eviction when the buffer is full. */
    pushFront(op) { this.ops.unshift(op); this.run(); }
    /** Drop queued audio (not removes): after a flush or a trim. */
    dropAppends(pred = () => true) { this.ops = this.ops.filter((o) => o.kind === 'remove' || !pred(o)); }
    get pendingAppends() { return this.ops.some((o) => o.kind === 'append'); }
    run() {
      const sb = this.sb;
      if (!sb || sb.updating || !this.ops.length) return;
      // Full: audio waits until a remove has made room (eviction runs on a timer as playback
      // moves on), so removes go ahead of the waiting audio.
      let op;
      if (this.full) {
        const i = this.ops.findIndex((o) => o.kind === 'remove');
        if (i < 0) return;
        op = this.ops.splice(i, 1)[0];
      } else op = this.ops.shift();
      if (op.kind === 'remove') this.full = false;
      try {
        if (op.kind === 'init') { if (this.inits++ && sb.changeType) sb.changeType(MIME); sb.appendBuffer(op.data); }
        else if (op.kind === 'append') sb.appendBuffer(op.data);
        else if (op.kind === 'remove') {
          const b = sb.buffered;
          if (b.length && op.to > op.from) sb.remove(op.from, op.to);
          else this.run();   // nothing to remove: carry on
        }
      } catch (e) {
        if (e.name === 'QuotaExceededError' && op.kind === 'append') {
          this.ops.unshift(op);          // keep it; retried once there is room
          this.full = true;
          if (this.onQuota) this.onQuota();
        } else {
          this.diag('media', `${op.kind} failed: ${e.message}`);
          if (op.kind !== 'append') this.run();
        }
      }
    }
  }

  class MediaOutput {
    /** el: the <audio> element (in the document, so the OS media controls attach to it). */
    constructor(el, { diag = () => {} } = {}) {
      this.el = el; this.diag = diag;
      this.engine = 'Media element (' + (G.ManagedMediaSource ? 'Managed Media Source' : 'Media Source') + ')';
      el.disableRemotePlayback = true;   // Managed Media Source requires this (or an AirPlay source)
      el.preload = 'auto';
      this.writer = new LJ.Fmp4Writer(); this.segs = []; this.playing = false; this.unlocked = false; this.unlocking = false;
      this.gain = 1; this.muted = false; this.level = 1; this.rate = 0; this.timers = []; this.jumpTo = null;
      this.volumeLocked = !volumeWorks();
      this.onReport = null; this.onState = null; this.externalPause = null; this.onFailure = null;
      this.ownPauses = 0;   // our own pauses: their events arrive later, asynchronously
      this.sbq = new SourceBufferQueue({ diag, onQuota: () => this._evict(2, true) });
      this.listeners = [];
      const on = (target, ev, fn) => { target.addEventListener(ev, fn); this.listeners.push([target, ev, fn]); };
      on(el, 'timeupdate', () => this.onReport && this.onReport());
      on(el, 'waiting', () => { this._makeRoom(); this._unstick(); if (this.onReport) this.onReport(); });
      on(el, 'playing', () => this.onState && this.onState());
      on(el, 'pause', () => {
        if (this.onState) this.onState();
        if (this.ownPauses > 0) { this.ownPauses--; return; }
        // The OS paused us (a call, another app, headphones out): report it, as a Squeezebox would.
        if (this.playing && this.externalPause) this.externalPause();
      });
      on(el, 'error', () => {
        if (this.unlocking) return;   // the unlock clip's error, not the stream's
        this._fail('element error ' + (el.error && el.error.code));
      });
      this.intervals = [
        setInterval(() => { if (this.playing) { this._makeRoom(); this._unstick(); } }, 250),
        setInterval(() => { if (this.sbq.full) this._makeRoom(); else this._evict(KEEP_BEHIND_S); this.sbq.run(); }, EVICT_EVERY_MS),
      ];
      this._open();
    }

    _open() {
      const MS = mediaSourceClass();
      const ms = this.ms = new MS();
      this.sbq.detach();
      this.tookAudio = false;   // until an append to this source succeeds
      ms.addEventListener('sourceopen', () => {
        if (ms !== this.ms) return;
        try {
          const sb = ms.addSourceBuffer(MIME);
          sb.mode = 'segments';
          sb.addEventListener('updateend', () => {
            try { if (ms === this.ms && sb.buffered.length) this.tookAudio = true; } catch (e) { /* removed */ }
            this._unstick();
          });
          sb.addEventListener('bufferedchange', () => this._unstick());   // Managed Media Source evicts by itself
          sb.addEventListener('error', () => this.diag('media', 'source buffer error'));
          this.sbq.attach(sb);
        } catch (e) { this._fail('media source: ' + e.message); }
      }, { once: true });
      ms.addEventListener('sourceended', () => { if (ms === this.ms) this._fail('media source ended'); });
      ms.addEventListener('startstreaming', () => this.sbq.run());
      if (this.url) URL.revokeObjectURL(this.url);
      this.url = URL.createObjectURL(ms);
      if (this.unlocked) { this.ownPauses = 0; this.el.src = this.url; }
    }

    /**
     * The element or its source failed: start a fresh one, and tell the host (audio was lost).
     * A browser that fails every fresh source too (it can't play the format after all) would
     * loop for ever: after FAIL_LIMIT failures within FAIL_WINDOW_MS, give up and tell the host
     * it's fatal (onFailure's third argument), so it can choose another output. Only sources
     * that never took audio count: one that did worked, so its failure is the audio's (one bad
     * track the host may restart), not the browser's, and the count starts again.
     */
    _fail(why) {
      if (this.failing || this.dead) return;
      this.failing = true;
      const wasPlaying = this.playing;
      const now = Date.now();
      if (this.tookAudio) this.failTimes = [];
      else {
        this.failTimes = (this.failTimes || []).filter((t) => now - t < FAIL_WINDOW_MS);
        this.failTimes.push(now);
      }
      const fatal = this.failTimes.length >= FAIL_LIMIT;
      this.diag('media', 'failed: ' + why + (fatal ? '; giving up' : '; starting a new media source'));
      this._reset(0);
      if (fatal) this.dead = true; else this._open();
      this.failing = false;
      if (this.onFailure) this.onFailure(why, wasPlaying, fatal);
    }

    // -- unlocking (iOS: play() must first succeed inside a tap) ------------------
    get needsGesture() { return !this.unlocked; }
    unlock() { this.prime(); }
    prime() {
      if (this.unlocked || this.unlocking) return;
      this.unlocking = true;
      // A tap after the give-up starts a new attempt; the old play() then settles (aborted by the
      // new src) and must be ignored, or the stream source would be set twice.
      const el = this.el, attempt = this.unlockAttempt = (this.unlockAttempt || 0) + 1;
      const giveUp = setTimeout(() => { this.unlocking = false; }, UNLOCK_TIMEOUT_MS);   // never stuck
      el.src = SILENT_WAV;
      const after = () => {
        clearTimeout(giveUp);
        this.unlocking = false;
        el.pause();
        this.ownPauses = 0;          // changing src discards the pending pause event
        if (el.src !== this.url) el.src = this.url;
        if (this.playing) this._play();
        if (this.onState) this.onState();
      };
      let p;
      try { p = el.play(); } catch (e) { p = Promise.reject(e); }
      // Only the browser refusing sound (NotAllowedError) keeps us locked. Any other failure is the
      // clip's, and the tap still counts: browsers allow play() for the page after a gesture.
      const stale = () => attempt !== this.unlockAttempt || this.unlocked;
      const refused = (e) => {
        if (stale()) return;
        this.diag('media', `unlock: ${e && e.name}: ${e && e.message}`);
        if (e && e.name === 'NotAllowedError') { clearTimeout(giveUp); this.unlocking = false; return; }
        this.unlocked = true; after();
      };
      if (p && p.then) p.then(() => { if (stale()) return; this.unlocked = true; after(); }, refused);
      else { this.unlocked = true; after(); }
    }

    // -- data ---------------------------------------------------------------
    push(seq, rate, chans, bits) {
      this.rate = rate;
      const last = this.segs[this.segs.length - 1];
      if (!last || last.seq !== seq) this.segs.push({ seq, start: this.writer.end });
      const at = this.writer.end;   // where an init segment (a format change) takes effect
      for (const s of this.writer.push(rate, chans, bits || 16)) this._queue(s, at);
    }
    endSeq(seq) {
      // The last track so far: write out its partial last block, so its end is heard.
      const last = this.segs[this.segs.length - 1];
      if (last && last.seq === seq) for (const s of this.writer.flush()) this._queue(s);
    }
    _queue(s, at) { this.sbq.push(s.init ? { kind: 'init', data: s.init, start: at } : { kind: 'append', data: s.data, start: s.start, end: s.end }); }

    /** Remove played audio, keeping `keep` seconds behind the playhead. */
    _evict(keep, urgent) {
      const sb = this.sbq.sb;
      if (!sb) return;
      let from;
      try { if (!sb.buffered.length) return; from = sb.buffered.start(0); } catch (e) { return; }
      const to = this.el.currentTime - keep;
      if (to - from > 1) (urgent ? this.sbq.pushFront.bind(this.sbq) : this.sbq.push.bind(this.sbq))({ kind: 'remove', from, to });
    }

    /**
     * The buffer is full and audio waits. A quota smaller than KEEP_BEHIND_S plus what is ahead
     * (Chrome holds ~12 MB; hi-res FLAC is over 1 MB/s) would let the playhead reach the end
     * before anything is old enough to evict, and playback would wait for ever: keep only
     * FULL_KEEP_S behind, and try the waiting audio again (the browser may have evicted itself).
     */
    _makeRoom() {
      if (!this.sbq.full) return;
      this.sbq.full = false;
      this._evict(FULL_KEEP_S, true);
      this.sbq.run();
    }

    /**
     * Keep the element on the audio. After a flush, move to where the new audio starts once it
     * is buffered. If playback ever waits before buffered audio (a gap at a format change, or
     * audio the browser evicted), step to it: Safari doesn't do that by itself.
     */
    _unstick() {
      const sb = this.sbq.sb, el = this.el;
      if (!sb || sb.updating) return;
      let b;
      try { b = sb.buffered; } catch (e) { return; }
      const ct = el.currentTime;
      if (this.jumpTo != null) {
        for (let i = 0; i < b.length; i++) {
          if (b.end(i) > this.jumpTo && b.start(i) <= this.jumpTo + 0.05) { el.currentTime = Math.max(this.jumpTo, b.start(i)); this.jumpTo = null; return; }
        }
        return;
      }
      if (!this.playing) return;
      for (let i = 0; i < b.length; i++) if (b.start(i) <= ct + 0.01 && ct < b.end(i) - 0.02) return;   // on the audio
      for (let i = 0; i < b.length; i++) {
        if (b.start(i) > ct) { this.diag('media', `stepped over a ${((b.start(i) - ct) * 1000).toFixed(0)} ms gap`); el.currentTime = b.start(i); return; }
      }
    }

    // -- transport --------------------------------------------------------------
    _play() {
      if (!this.unlocked) return;
      const p = this.el.play();
      if (p && p.catch) p.catch((e) => this.diag('media', 'play refused: ' + e.message));
    }
    _pauseEl() { if (!this.el.paused) { this.ownPauses++; this.el.pause(); } }
    _clearTimers() { for (const t of this.timers) clearTimeout(t); this.timers = []; }
    play() { this.playing = true; this._clearTimers(); this._play(); }
    pause() { this.playing = false; this._clearTimers(); this._pauseEl(); }
    startAt(ms) {
      this.playing = true; this._clearTimers();
      const wait = ms - performance.now();
      if (wait <= 5) this._play(); else this.timers.push(setTimeout(() => this._play(), wait));
    }
    pauseFor(ms) {
      if (!this.playing) return;
      this._pauseEl();
      const t = setTimeout(() => { this.timers = this.timers.filter((x) => x !== t); if (this.playing) this._play(); }, ms);
      this.timers.push(t);   // one per sync correction: gone once it has fired
    }
    skip(ms) { try { this.el.currentTime += ms / 1000; } catch (e) { /* not seekable yet */ } }
    _reset(t) {
      this.playing = false; this._clearTimers(); this._pauseEl();
      this.segs = [];
      this.sbq.dropAppends();
      this.sbq.push({ kind: 'remove', from: 0, to: Infinity });
      this.writer.restart(t);
      this.jumpTo = t;
    }
    flush() { this._reset(this.el.currentTime + 0.05); }
    trimAfter(seq) {
      const next = this.segs.find((s) => s.seq > seq);
      this.segs = this.segs.filter((s) => s.seq <= seq);
      if (!next) return;
      this.sbq.dropAppends((o) => o.start >= next.start - 1e-6);
      this.sbq.push({ kind: 'remove', from: next.start, to: Infinity });
      this.writer.restart(next.start);
    }

    // -- volume (where the page may set it) -------------------------------------
    setGain(g) { this.gain = g; this._vol(); }
    setMute(m) { this.muted = m; this._vol(); }
    setLevel(l) { this.level = l; this._vol(); }
    // Where the volume is the device's (iOS), LMS's mute (a gain of 0) still silences the element.
    _vol() { this.el.muted = this.muted || (this.volumeLocked && this.gain === 0); if (!this.volumeLocked) this.el.volume = Math.max(0, Math.min(1, this.gain * this.level)); }

    // -- what is heard ----------------------------------------------------------
    queuedSeconds() { return Math.max(0, this.writer.end - this.el.currentTime); }
    get underrun() {
      if (!this.playing || !this.unlocked) return false;
      // Fragments written, not all pushed: frames still held for the next fragment can't be heard yet.
      return this.writer.written - this.el.currentTime < 0.05 && !this.sbq.pendingAppends;
    }
    audible() {
      const ct = this.el.currentTime;
      let s = null;
      for (const x of this.segs) if (x.start <= ct + 0.001) s = x;
      if (!s) return null;
      // Tracks wholly in the past are no longer needed for the mapping.
      const i = this.segs.indexOf(s);
      if (i > 2) this.segs.splice(0, i - 2);
      return { seq: s.seq, ms: Math.max(0, (ct - s.start) * 1000) };
    }
    /** Where the lock screen's position comes from: the current track's own timeline. */
    trackPosition() { const a = this.audible(); return a ? a.ms / 1000 : 0; }
    info() { return { rate: this.rate, state: this.el.paused ? 'paused' : 'running', latency: 0 }; }

    dispose() {
      for (const i of this.intervals) clearInterval(i);
      for (const [t, ev, fn] of this.listeners) t.removeEventListener(ev, fn);
      this._clearTimers(); this._pauseEl();
      this.sbq.detach();
      try { this.el.removeAttribute('src'); this.el.load(); } catch (e) { /* */ }   // let go of the media source
      if (this.url) URL.revokeObjectURL(this.url);
    }
  }

  Object.assign(LJ, { MediaOutput, SourceBufferQueue, mediaSupported, volumeWorks, selfTest, MEDIA_MIME: MIME });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS output: Web Audio, for desktops. One AudioContext per sample rate where the browser
 * allows it, with the output stage (output/worklet.js) running as an AudioWorklet on secure
 * pages or on the main thread (ScriptProcessorNode) on plain http.
 *
 * The output interface, shared with output/media.js:
 *   push(seq, rate, chans, bits)  decoded audio of track `seq`
 *   endSeq(seq)                   no more audio for that track
 *   play() / pause()              start or stop rendering
 *   startAt(ms)                   start at that time on the performance.now() clock (sync)
 *   pauseFor(ms) / skip(ms)       sync corrections: insert silence / drop audio
 *   flush()                       drop everything; trimAfter(seq): drop what came after seq
 *   setGain(g), setMute(b), setLevel(l)   LMS volume, power, and the page's own level
 *   queuedSeconds(), underrun     how much is waiting; true when playing with nothing to play
 *   audible(ms) -> {seq, ms}      what is heard at that time, and how far into its track
 *   needsGesture, unlock()        browsers start audio only inside a user gesture
 *   info(), engine, dispose()
 *   onReport, onState             callbacks: position moved / output state changed */
'use strict';
(function (G) {
  const LJ = G.LJ;

  /** Streaming 4-point (Catmull-Rom) resampler; the last input samples of each chunk are
   *  carried in `st`, so chunk boundaries are seamless. Used only where the browser won't open
   *  an output at the track's own rate (iPad after the first track). */
  function resampleCubic(chans, from, to, st) {
    const TAIL = 4, ratio = from / to, n = chans[0].length;
    if (!st.tail || st.tail.length !== chans.length) { st.tail = chans.map(() => new Float32Array(TAIL)); st.pos = TAIL; }
    const maxX = n + TAIL - 3;
    const count = st.pos <= maxX ? Math.floor((maxX - st.pos) / ratio) + 1 : 0;
    const out = [];
    for (let c = 0; c < chans.length; c++) {
      const ext = new Float32Array(n + TAIL); ext.set(st.tail[c]); ext.set(chans[c], TAIL);
      const dst = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        const x = st.pos + i * ratio, i0 = Math.floor(x), t = x - i0;
        const y0 = ext[i0 - 1], y1 = ext[i0], y2 = ext[i0 + 1], y3 = ext[i0 + 2];
        dst[i] = y1 + 0.5 * t * (y2 - y0 + t * (2 * y0 - 5 * y1 + 4 * y2 - y3 + t * (3 * (y1 - y2) + y3 - y0)));
      }
      st.tail[c] = ext.slice(n);
      out.push(dst);
    }
    st.pos += count * ratio - n;
    return out;
  }

  /**
   * The output stage on the main thread, driven by a ScriptProcessorNode: for plain http pages,
   * where browsers don't offer AudioWorklet. It is the same LyrionOutputCore the worklet runs,
   * with the same messages. The clock is the context frame of the next sample to render.
   */
  function mainThreadOutput(ctx, size = 8192) {
    let frame = 0;
    const mainPort = { onmessage: null, postMessage: (m) => { if (procPort.onmessage) procPort.onmessage({ data: m }); } };
    const procPort = { onmessage: null, postMessage: (m) => queueMicrotask(() => mainPort.onmessage && mainPort.onmessage({ data: m })) };
    const core = new LJ.LyrionOutputCore(procPort, () => frame);
    const sp = ctx.createScriptProcessor(size, 1, 2);
    sp.onaudioprocess = (e) => {
      const start = Math.round(e.playbackTime * ctx.sampleRate);
      frame = start;
      const ob = e.outputBuffer;
      core.process([], [[ob.getChannelData(0), ob.getChannelData(1)]]);
      frame = start + ob.length;   // between callbacks: the next sample to be rendered
    };
    sp.connect(ctx.destination);
    return { port: mainPort, sp, core, disconnect: () => { sp.onaudioprocess = null; sp.disconnect(); } };
  }

  function waitRunning(ctx, ms) {
    if (ctx.state === 'running') return Promise.resolve(true);
    return new Promise((res) => {
      const t = setTimeout(() => { ctx.onstatechange = null; res(ctx.state === 'running'); }, ms);
      ctx.onstatechange = () => { if (ctx.state === 'running') { clearTimeout(t); ctx.onstatechange = null; res(true); } };
    });
  }

  async function detectMaxRate() {
    for (const r of [192000, 96000]) {
      try { const c = new AudioContext({ sampleRate: r }); const ok = c.sampleRate === r; c.close().catch(() => {}); if (ok) return r; }
      catch (e) { /* not supported */ }
    }
    return 48000;
  }

  class WebOutput {
    /**
     * opts: { workletSource: string, diag(kind, msg), level: 0..1, preferRate: Hz, onRate(rate),
     *         singleContext: bool (start a second context only with a tap, as on iOS) }
     */
    constructor(opts = {}) {
      this.workletSource = opts.workletSource; this.diag = opts.diag || (() => {});
      this.preferRate = opts.preferRate || 44100; this.onRate = opts.onRate || null;
      this.ctx = null; this.node = null; this.rate = 0; this.srcRate = 0; this.creating = null;
      this.pending = []; this.posts = []; this.postId = 0; this.epoch = 0; this.cmds = [];
      this.rep = null; this.segStarts = []; this.gain = 1; this.muted = false; this.level = opts.level == null ? 1 : opts.level;
      this.playing = false; this.onReport = null; this.onState = null; this.url = null; this.lastTick = 0;
      this.rs = {}; this.singleContext = !!opts.singleContext; this.startFailures = 0; this.engine = '';
      this.drainedSince = 0; this.failedAt = 0;
    }
    get needsGesture() { return !!this.ctx && this.ctx.state !== 'running'; }
    unlock() { this.prime(); }

    queuedFrames() { return Math.max(0, (this.rep ? this.rep.queued : 0) + this.posts.reduce((a, p) => a + p.frames, 0)); }
    queuedSeconds() {
      let s = this.rate ? this.queuedFrames() / this.rate : 0;
      for (const p of this.pending) s += p.chans[0].length / p.rate;
      return s;
    }
    get underrun() {
      return this.playing && !this.creating && this.pending.length === 0 && this.posts.length === 0 && (!this.rep || this.rep.queued <= 0);
    }

    push(seq, rate, chans) {
      if (chans.length > 2) chans = chans.slice(0, 2);
      if (this.creating || this.pending.length || !this.ctx || rate !== this.srcRate) {
        this.pending.push({ seq, rate, chans }); this._drainPending(); return;
      }
      this._post(seq, chans);
    }
    _post(seq, chans) {
      if (this.rate !== this.srcRate) chans = resampleCubic(chans, this.srcRate, this.rate, this.rs);
      const own = (a) => (a.byteOffset === 0 && a.byteLength === a.buffer.byteLength ? a : a.slice());
      const l = own(chans[0]), r = chans[1] ? own(chans[1]) : null;
      if (!l.length) return;
      const id = ++this.postId;
      this.posts.push({ id, frames: l.length, seq });
      const transfer = [l.buffer]; if (r) transfer.push(r.buffer);
      this.node.port.postMessage({ t: 'push', id, seq, l, r }, transfer);
    }
    _drainPending() {
      if (this.creating) return;
      if (this.failedAt && performance.now() - this.failedAt < 2900) return;
      while (this.pending.length) {
        const p = this.pending[0];
        if (this.ctx && p.rate === this.srcRate) { this.pending.shift(); this._post(p.seq, p.chans); continue; }
        if (this.ctx && this.singleContext) {
          // This browser won't start a new context without a tap: keep this one, resample.
          this.srcRate = p.rate; this.rs = {}; this.diag('output', `resampling ${p.rate} -> ${this.rate}`); continue;
        }
        // A new sample rate: let the current context play out, including what is still inside
        // its output latency, then open one at the new rate.
        if (this.ctx) {
          if (this.queuedFrames() > 0) { this.drainedSince = 0; return; }
          const tail = ((this.ctx.outputLatency || 0) + (this.ctx.baseLatency || 0)) * 1000 + 30;
          if (!this.drainedSince) this.drainedSince = performance.now();
          const left = tail - (performance.now() - this.drainedSince);
          if (left > 0) { clearTimeout(this.tailTimer); this.tailTimer = setTimeout(() => this._drainPending(), left); return; }
        }
        this.drainedSince = 0;
        this._create(p.rate); return;
      }
    }

    /** Called from a user gesture: open (or resume) the output now, while the browser allows it. */
    prime() {
      if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume().then(() => this.onState && this.onState(), () => {}); return; }
      if (!this.creating) this._create(this.preferRate, true);
    }

    async _create(rate, priming) {
      let done, ctx = null;
      this.creating = new Promise((r) => { done = r; });
      try {
        try { ctx = new AudioContext({ sampleRate: rate, latencyHint: 'playback' }); }
        catch (e) { ctx = new AudioContext({ latencyHint: 'playback' }); }
        ctx.resume().catch(() => {});   // inside a tap, this is what lets Safari start it
        const old = this.ctx;
        if (old && old.state === 'running' && !(await waitRunning(ctx, 800))) {
          // A second context needs another tap here: keep the running one and resample into it.
          ctx.close().catch(() => {}); ctx = null;
          this.startFailures++;
          if (this.startFailures >= 2) this.singleContext = true;
          this.srcRate = rate; this.rs = {};
          this.diag('output', `a ${rate} Hz context would not start; resampling into ${this.rate} Hz`);
          return;
        }
        let node;
        if (ctx.audioWorklet && typeof AudioWorkletNode === 'function') {
          if (!this.url) this.url = URL.createObjectURL(new Blob([this.workletSource], { type: 'application/javascript' }));
          await ctx.audioWorklet.addModule(this.url);
          node = new AudioWorkletNode(ctx, 'lyrionjs-output', { numberOfInputs: 0, numberOfOutputs: 1, outputChannelCount: [2] });
          node.connect(ctx.destination);
          this.engine = 'AudioWorklet';
        } else {
          // AudioWorklet exists only on HTTPS (or localhost) pages: on plain http on the LAN the
          // same output code runs on the main thread.
          node = mainThreadOutput(ctx);
          this.engine = 'ScriptProcessor';
        }
        if (old) {
          // The old context's reports no longer mean anything.
          if (this.node) this.node.port.onmessage = null;
          if (this.node && this.node.disconnect) try { this.node.disconnect(); } catch (e) { /* gone */ }
          old.close().catch(() => {});
        }
        this.rep = null; this.segStarts = []; this.posts = []; this.rs = {};
        node.port.onmessage = (e) => { if (node === this.node) this._msg(e.data); };
        this.ctx = ctx; this.node = node; this.rate = ctx.sampleRate; this.srcRate = rate;
        node.port.postMessage({ t: 'flush', epoch: this.epoch });
        if (this.onRate) this.onRate(rate);
        this._applyGain(true);
        if (this.playing) node.port.postMessage({ t: 'play' });
        for (const c of this.cmds.splice(0)) this._command(c);   // corrections that arrived while creating
        ctx.onstatechange = () => { this.diag('output', 'context ' + ctx.state); if (this.onState) this.onState(); };
        if (ctx.state !== 'running') ctx.resume().catch(() => {});
        this.failedAt = 0;
        this.diag('output', `context open (${this.engine}): asked ${rate} Hz, got ${ctx.sampleRate} Hz, ${ctx.state}${priming ? ' (primed by a tap)' : ''}`);
      } catch (e) {
        if (ctx && ctx !== this.ctx) ctx.close().catch(() => {});
        this.failedAt = performance.now();   // never retry straight away
        this.diag('error', 'audio output: ' + (e && e.message || e));
      } finally {
        this.creating = null; done();
        if (this.failedAt) setTimeout(() => this._drainPending(), 3000);
        else this._drainPending();
        if (this.onState) this.onState();
      }
    }

    _msg(m) {
      if (m.epoch !== this.epoch) return;
      if (m.t === 'seg') { this.segStarts.push({ seq: m.seq, frame: m.frame }); if (this.segStarts.length > 24) this.segStarts.shift(); return; }
      if (m.t !== 'pos') return;
      this.rep = m;
      if (this.posts.length) this.posts = this.posts.filter((p) => p.id > m.lastId);
      if (this.pending.length && !this.creating) this._drainPending();
      const now = performance.now();
      if (this.onReport && (m.event || now - this.lastTick > 50)) { this.lastTick = now; this.onReport(); }
    }

    _ctxTimeAt(ms) {
      const c = this.ctx;
      const ts = c.getOutputTimestamp ? c.getOutputTimestamp() : null;
      if (ts && ts.performanceTime > 0 && c.state === 'running') return ts.contextTime + (ms - ts.performanceTime) / 1000;
      return c.currentTime - (c.outputLatency || 0) - (c.baseLatency || 0) + (ms - performance.now()) / 1000;
    }

    /** Commands that need the node; kept until it exists (a sync start can arrive while it opens). */
    _command(c) {
      if (!this.node) { this.cmds.push(c); return; }
      if (c.t === 'startAt') this.node.port.postMessage({ t: 'startAt', frame: Math.round(this._ctxTimeAt(c.ms) * this.rate) });
      else if (c.t === 'pauseFor') this.node.port.postMessage({ t: 'pauseFor', frames: Math.round(c.ms * this.rate / 1000) });
      else if (c.t === 'skip') this.node.port.postMessage({ t: 'skip', frames: Math.round(c.ms * this.rate / 1000) });
    }
    play() { this.playing = true; this.cmds = this.cmds.filter((c) => c.t !== 'startAt'); if (this.node) this.node.port.postMessage({ t: 'play' }); }
    pause() { this.playing = false; this.cmds = []; if (this.node) this.node.port.postMessage({ t: 'pause' }); }
    startAt(ms) { this.playing = true; this._command({ t: 'startAt', ms }); }
    pauseFor(ms) { this._command({ t: 'pauseFor', ms }); }
    skip(ms) { this._command({ t: 'skip', ms }); }
    flush() {
      this.epoch++; this.pending = []; this.posts = []; this.cmds = []; this.rep = null; this.segStarts = []; this.playing = false;
      if (this.node) this.node.port.postMessage({ t: 'flush', epoch: this.epoch });
    }
    trimAfter(seq) {
      this.pending = this.pending.filter((p) => p.seq <= seq);
      this.posts = this.posts.filter((p) => p.seq <= seq);
      if (this.node) this.node.port.postMessage({ t: 'trim', keep: seq });
    }
    endSeq() {}
    setGain(g) { this.gain = g; this._applyGain(); }
    setMute(m) { this.muted = m; this._applyGain(); }
    setLevel(l) { this.level = l; this._applyGain(); }
    _applyGain(now) { if (this.node) this.node.port.postMessage({ t: 'gain', g: this.muted ? 0 : this.gain * this.level, now: !!now }); }

    audible(nowMs) {
      if (!this.ctx || !this.rep) return null;
      const t = Math.min(this._ctxTimeAt(nowMs), this.ctx.currentTime);
      const fa = t * this.rate;
      let s = null;
      for (const x of this.segStarts) if (x.frame <= fa) s = x;
      if (!s) return null;
      const rep = this.rep;
      const frames = s.seq === rep.seq ? (rep.playing ? rep.pos - Math.max(0, rep.frame - fa) : rep.pos) : fa - s.frame;
      return { seq: s.seq, ms: Math.max(0, frames) * 1000 / this.rate };
    }
    info() {
      const c = this.ctx;
      return c ? { rate: c.sampleRate, state: c.state, latency: Math.round(((c.outputLatency || 0) + (c.baseLatency || 0)) * 1000) } : null;
    }
    dispose() {
      clearTimeout(this.tailTimer);
      if (this.node) this.node.port.onmessage = null;
      if (this.ctx) this.ctx.close().catch(() => {});
      if (this.url) URL.revokeObjectURL(this.url);
      this.ctx = this.node = null;
    }
  }

  Object.assign(LJ, { WebOutput, resampleCubic, mainThreadOutput, waitRunning, detectMaxRate });
})(typeof globalThis !== 'undefined' ? globalThis : this);
/* LyrionJS host: the connections the Slimproto player uses (core/player.js).
 *
 *   controlSocket()  Slimproto over the plugin's WebSocket, which pipes it to LMS's own port
 *                    and holds it for a short while across dropouts (docs/ARCHITECTURE.md).
 *   openStream()     an audio stream LMS asked for, fetched over HTTP with flow control.
 *
 * Browser APIs are passed in (env), so both run under Node in the tests. */
'use strict';
(function (G) {
  const LJ = G.LJ;

  // LMS talks to every player at least every 5 s, and drops one silent for 15 s: two missed
  // polls mean dead, early enough to resume before LMS gives up.
  const DEAD_MS = 11000;
  const CONNECT_MS = 6000;        // a socket must open and say hello within this
  const STREAM_OPEN_MS = 15000;   // a stream's server must answer (send the response head) within this
  const STREAM_IDLE_MS = 30000;   // a stream with room to send that sends nothing is dead
  /** Close codes the plugin sends (docs/ARCHITECTURE.md): the session is over, resuming is
   *  pointless. Only drops (1005, 1006, unknown codes) are resumed. */
  const NO_RESUME = [1000, 1001, 1002, 1008, 1009, 1011, 1013, 4000, 4403, 4404];
  const BACKOFF = [250, 600, 1200, 2500];
  const RECENT_MAX = 200;         // frames kept to send again after a resume (STATs are small and few)

  const isHeartbeat = (u8) => u8.length >= 12 && LJ.latin1(u8.subarray(0, 4)) === 'STAT' && LJ.latin1(u8.subarray(8, 12)) === 'STMt';

  function browserEnv() {
    return {
      WebSocket: G.WebSocket, fetch: (...a) => G.fetch(...a), now: () => G.performance.now(),
      setTimeout: (f, ms) => G.setTimeout(f, ms), clearTimeout: (t) => G.clearTimeout(t),
      setInterval: (f, ms) => G.setInterval(f, ms), clearInterval: (t) => G.clearInterval(t),
      document: G.document, origin: G.location && G.location.origin,
    };
  }

  /**
   * The Slimproto connection. A dropout that ends within the plugin's hold is invisible to the
   * player: the session resumes and what LMS sent meanwhile is replayed (marked as replayed).
   * Interface: { send(u8), close(), onopen, onresumed, ondata(u8, replayed), onclose(code) }.
   */
  function controlSocket(url, env = browserEnv(), diag = () => {}) {
    const c = { onopen: null, onresumed: null, ondata: null, onclose: null };
    let ws = null, session = null, received = 0, attached = false, closed = false;
    let outbox = [], lastRx = 0, gapSince = null, hold = 10, tries = 0, timer = null, connectTimer = null, replayLeft = 0;
    // Bytes sent in this session, and the frames (not heartbeats) among them: a socket that died
    // without a word loses what was sent into it, and a resume says how much arrived ("got").
    let sent = 0, recent = [];
    const put = (u8) => {
      ws.send(u8); sent += u8.length;
      if (!isHeartbeat(u8)) { recent.push({ end: sent, u8 }); if (recent.length > RECENT_MAX) recent.shift(); }
    };

    c.send = (u8) => {
      if (attached && ws && ws.readyState === 1) { put(u8); return; }
      // Away: keep what LMS must hear (track started, decoder done…); never heartbeats.
      if (session && !isHeartbeat(u8)) { outbox.push(u8); if (outbox.length > 500) outbox.shift(); }
    };
    c.close = () => { if (closed) return; closed = true; teardown(); if (ws) { const w = ws; ws = null; try { w.close(1000); } catch (e) { /* closed */ } } };

    function teardown() {
      env.clearTimeout(timer); env.clearTimeout(connectTimer); env.clearInterval(watch);
      if (env.document) env.document.removeEventListener('visibilitychange', onVisible);
    }

    function open() {
      if (closed) return;
      attached = false;
      const me = ws = new env.WebSocket(url);
      me.binaryType = 'arraybuffer';
      // A socket that never opens, or opens and never says hello (a phone changing networks),
      // would otherwise wait for the OS's TCP timeout: minutes, far beyond the hold.
      env.clearTimeout(connectTimer);
      connectTimer = env.setTimeout(() => { if (me === ws && !attached) drop('no answer'); }, CONNECT_MS);
      me.onopen = () => me.send(JSON.stringify(session
        ? { resume: { session: session.session, secret: session.secret, received } } : { hello: 1 }));
      me.onmessage = (e) => {
        if (me !== ws) return;
        lastRx = env.now();
        if (typeof e.data === 'string') return greeting(e.data);
        let u8 = new Uint8Array(e.data);
        received += u8.length;
        if (replayLeft > 0) {
          const n = Math.min(replayLeft, u8.length);
          replayLeft -= n;
          if (c.ondata) c.ondata(u8.subarray(0, n), true);
          u8 = u8.subarray(n);
          if (replayLeft === 0 && c.onresumed) c.onresumed();
          if (!u8.length) return;
        }
        if (c.ondata) c.ondata(u8, false);
      };
      me.onclose = (e) => { if (me === ws) gone(e.code); };
      me.onerror = () => {};
    }

    function greeting(text) {
      let m; try { m = JSON.parse(text); } catch (e) { return; }
      if (!m || !m.session) return;
      env.clearTimeout(connectTimer);
      const resumed = !!m.resumed && !!session && m.session === session.session;
      session = m; hold = +m.hold || 10; attached = true; tries = 0; gapSince = null;
      if (resumed) {
        // What was sent into the dead socket and never arrived goes again, before what was held.
        let again = [];
        if (m.got != null && +m.got <= sent) { again = recent.filter((f) => f.end > +m.got).map((f) => f.u8); sent = +m.got; }
        recent = [];
        const q = outbox; outbox = [];
        for (const f of again) put(f);
        for (const f of q) put(f);
        replayLeft = +m.replay || 0;
        diag('socket', `resumed: ${replayLeft} bytes replayed, ${again.length} lost frames sent again, ${q.length} held frames sent`);
        if (!replayLeft && c.onresumed) c.onresumed();
      } else {
        received = 0; outbox = []; replayLeft = 0; sent = 0; recent = [];
        if (c.onopen) c.onopen();
      }
    }

    function gone(code) {
      attached = false; ws = null;
      env.clearTimeout(connectTimer);
      if (closed) return;
      if (gapSince == null) gapSince = env.now();
      const within = env.now() - gapSince < (hold - 1.5) * 1000;
      if (session && within && !NO_RESUME.includes(code)) {
        const wait = BACKOFF[Math.min(tries++, BACKOFF.length - 1)];
        diag('socket', `dropped (${code}); resuming in ${wait} ms`);
        env.clearTimeout(timer);
        timer = env.setTimeout(open, wait);
        return;
      }
      diag('socket', `session over (${code})`);
      session = null; outbox = []; closed = true;
      teardown();
      if (c.onclose) c.onclose(code);
    }

    // A socket that has heard nothing for DEAD_MS is dead even if nobody said so: abandon it.
    function drop(why) {
      if (!ws) return;
      const w = ws; ws = null;
      w.onclose = null; w.onmessage = null; w.onopen = null;
      try { w.close(); } catch (e) { /* closed */ }
      diag('socket', 'dropping the socket: ' + why);
      gone(1006);
    }
    const watch = env.setInterval(() => { if (attached && env.now() - lastRx > DEAD_MS) drop('silent'); }, 2000);
    const onVisible = () => { if (env.document && !env.document.hidden && attached && env.now() - lastRx > DEAD_MS) drop('silent while hidden'); };
    if (env.document) env.document.addEventListener('visibilitychange', onVisible);
    open();
    return c;
  }

  /**
   * An audio stream LMS asked the player to fetch. With no server address (LMS itself, which
   * is always the case for proxied streams) it is fetched from this origin; otherwise the
   * browser tries that address, which works only where the server allows cross-site requests.
   * Reading pauses while `win` bytes are delivered but not yet acknowledged as consumed.
   * Interface: { send(requestBytes), ack(n), close(), onopen, ondata(u8), onclose(clean) }.
   */
  function openStream({ ip, port, win }, env = browserEnv(), diag = () => {}) {
    const s = { onopen: null, ondata: null, onclose: null };
    const ctrl = new AbortController();
    let delivered = 0, acked = 0, wake = null, done = false;
    const kick = () => { if (wake) { const w = wake; wake = null; w(); } };
    s.ack = (n) => { acked = Math.max(acked, n); if (delivered - acked < win) kick(); };
    s.close = () => { if (done) return; done = true; ctrl.abort(); kick(); };
    s.send = (req) => { run(LJ.latin1(req)).catch((e) => { diag('stream', 'failed: ' + (e && e.message || e)); end(false); }); };
    const end = (clean) => { if (!done) { done = true; ctrl.abort(); kick(); if (s.onclose) s.onclose(clean); } };

    async function run(text) {
      const lines = text.split('\r\n');
      const m = lines[0].match(/^(GET|POST)\s+(\S+)\s+HTTP/i);
      if (!m) return end(false);
      const headers = {};
      for (const line of lines.slice(1)) {
        const i = line.indexOf(':');
        if (i <= 0) continue;
        const k = line.slice(0, i).trim(), kl = k.toLowerCase();
        // Browsers set these themselves; a cross-site request carries only what's allowed.
        if (['host', 'connection', 'user-agent', 'accept-encoding', 'cache-control', 'referer'].includes(kl)) continue;
        if (ip && kl !== 'range') continue;
        headers[k] = line.slice(i + 1).trim();
      }
      const url = ip ? `http://${ip}:${port}${m[2]}` : new URL(m[2], env.origin).href;
      let res;
      // A server that never answers would leave the player waiting for ever (no DSCO, no STMn).
      const noAnswer = env.setTimeout(() => { if (!done) { diag('stream', 'no answer; giving up'); end(false); } }, STREAM_OPEN_MS);
      try {
        res = await env.fetch(url, { method: m[1].toUpperCase(), headers, signal: ctrl.signal, cache: 'no-store',
          credentials: ip ? 'omit' : 'same-origin', mode: ip ? 'cors' : 'same-origin' });
      } catch (e) {
        if (!done) diag('stream', `${ip ? 'direct stream ' + ip + ':' + port : 'stream'} failed: ${e.message}`);
        return end(false);
      } finally {
        env.clearTimeout(noAnswer);
      }
      if (done) return;
      // The response head, as a player would have read it off the socket (for RESP).
      let head = `HTTP/1.1 ${res.status} ${res.statusText || 'OK'}\r\n`;
      res.headers.forEach((v, k) => { head += `${k}: ${v}\r\n`; });
      const hb = new TextEncoder().encode(head + '\r\n');
      delivered += hb.length;
      s.ondata(hb);
      if (!res.body) return end(true);
      const reader = res.body.getReader();
      let lastByte = env.now();
      const idle = env.setInterval(() => {
        // Room to send but nothing arrives: the connection died without telling us.
        if (!done && delivered - acked < win && env.now() - lastByte > STREAM_IDLE_MS) { diag('stream', 'stalled; giving up'); end(false); }
      }, 5000);
      try {
        for (;;) {
          while (!done && delivered - acked >= win) { await new Promise((r) => { wake = r; }); lastByte = env.now(); }
          if (done) { reader.cancel().catch(() => {}); return; }
          let r;
          try { r = await reader.read(); } catch (e) { return end(false); }
          if (r.done) return end(true);
          lastByte = env.now();
          delivered += r.value.length;
          if (!done) s.ondata(r.value);
        }
      } finally {
        env.clearInterval(idle);
      }
    }
    env.setTimeout(() => { if (!done && s.onopen) s.onopen(); }, 0);   // the core sets its handlers first
    return s;
  }

  Object.assign(LJ, { controlSocket, openStream, browserEnv, NO_RESUME });
})(typeof globalThis !== 'undefined' ? globalThis : this);
