  /* LYRION-TV-MP3-DECODER-LIFECYCLE-1 */
  // Offline contexts have no close() method. Reuse them for the page lifetime
  // so each source rate (one of nine MPEG rates) needs at most one decoder.
  const mp3DecodeContexts = new Map();
  function decodeWithBrowser(bytes, rate) {
    return Promise.resolve().then(() => {
      let ctx = mp3DecodeContexts.get(rate);
      if (!ctx) {
        // The graph is never rendered. decodeAudioData keeps the file's
        // channel count and decodes at the context's sample rate.
        ctx = new OfflineAudioContext(2, 1, rate);
        mp3DecodeContexts.set(rate, ctx);
      }
      const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
      return ctx.decodeAudioData(buf);
    }).then(b => {
      const out = [];
      for (let c = 0; c < b.numberOfChannels; c++) out.push(b.getChannelData(c));
      return out;
    });
  }
