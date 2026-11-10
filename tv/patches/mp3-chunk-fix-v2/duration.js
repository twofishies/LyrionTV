/* LYRION-TV-MP3-CHUNK-2 */
// Chromium 53 sizes decodeAudioData's destination from an estimated duration.
// Give the demuxer an exact frame count. This metadata frame is skipped, not played.
function mp3DecodeInput(frames) {
  if (!frames.length || frames[0].hdr.layer !== 3) return LJ.concatAll(frames.map(f => f.frame));
  var bytes = new Uint8Array(frames[0].frame.subarray(0, 4));
  bytes[1] |= 1; // No CRC in the synthesized metadata frame.
  bytes[2] = (bytes[2] & 13) | 224; // Large legal frame, same version/rate; no padding.
  var h = mp3Header(bytes, 0), tag = new Uint8Array(h.len);
  tag.set(bytes);
  var side = h.ver === 3 ? (h.channels === 1 ? 17 : 32) : (h.channels === 1 ? 9 : 17);
  var at = 4 + side, total = tag.length;
  for (var i = 0; i < frames.length; i++) total += frames[i].frame.length;
  var view = new DataView(tag.buffer);
  tag.set([88,105,110,103], at); // Xing, with frame-count and byte-count fields only.
  view.setUint32(at + 4, 3, false);
  view.setUint32(at + 8, frames.length, false);
  view.setUint32(at + 12, total, false);
  // No encoder-delay/padding tag: the player already handles both on the real track.
  return LJ.concatAll([tag].concat(frames.map(f => f.frame)));
}
window.lyrionTVMp3Fix = {version:2,chunks:0,short:0,long:0,maxShortMs:0,lastDelta:0};
function mp3CheckDecodedLength(expected, actual, rate) {
  var s = window.lyrionTVMp3Fix, delta = actual - expected;
  s.chunks++; s.lastDelta = delta;
  if (delta < 0) { s.short++; s.maxShortMs = Math.max(s.maxShortMs, -delta * 1000 / rate); }
  if (delta > 0) s.long++;
  if (delta && window.lyrionTVPerf) window.lyrionTVPerf.event('mp3-decode-size',
    {expectedFrames:expected,actualFrames:actual,deltaFrames:delta,rate:rate});
}
