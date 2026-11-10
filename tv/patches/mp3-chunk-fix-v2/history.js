/* LYRION-TV-MP3-RESERVOIR-1 */
// A frame count alone cannot bound Layer III's byte reservoir. Keep the held-back
// frames plus a transform warm-up region, preceded by enough actual main-data bytes.
function mp3ReservoirHistory(frames, hold) {
  if (!frames.length) return [];
  var h = frames[frames.length - 1].hdr;
  if (h.layer !== 3) return frames.slice(-Math.max(4, hold + 2));
  // MPEG-2/2.5 frames have half as many samples: retain the same warm-up in samples.
  var start = Math.max(0, frames.length - hold - (h.ver === 3 ? 2 : 4));
  var needed = h.ver === 3 ? 511 : 255, bytes = 0;
  while (start > 0 && bytes < needed) {
    var r = frames[--start], header = r.hdr;
    var side = header.ver === 3 ? (header.channels === 1 ? 17 : 32) : (header.channels === 1 ? 9 : 17);
    var crc = (r.frame[1] & 1) ? 0 : 2;
    bytes += Math.max(0, r.frame.length - 4 - crc - side);
  }
  return frames.slice(start);
}
