"""Generate small, antialiased launcher icons using only Python's standard library."""
from pathlib import Path
import struct
import zlib

OUT = Path(__file__).resolve().parent / "app"
# Normalized path for the note's flag. Head and stem share its fill.
FLAG = [(54,28),(61,31),(70,32),(76,42),(77,51),(74,54),
        (69,47),(62,44),(57,43),(54,42)]

def inside_polygon(x, y):
    inside = False
    for (ax, ay), (bx, by) in zip(FLAG, FLAG[1:] + FLAG[:1]):
        if (ay > y) != (by > y) and x < (bx - ax) * (y - ay) / (by - ay) + ax:
            inside = not inside
    return inside

def rounded(x, y, margin, radius):
    dx = max(margin + radius - x, x - (100 - margin - radius), 0)
    dy = max(margin + radius - y, y - (100 - margin - radius), 0)
    return dx * dx + dy * dy <= radius * radius

def pixel(x, y):
    if not rounded(x, y, 2, 20):
        return (0, 0, 0, 0)
    head = ((x - 43) / 14) ** 2 + ((y - 67) / 10) ** 2 <= 1
    if head or 49 <= x <= 57 and 28 <= y <= 67 or inside_polygon(x, y):
        return (54, int(228 - .46 * y), int(210 - .22 * y), 255)
    if not rounded(x, y, 3.1, 19):
        return (51, 78, 91, 255)
    return (int(20 - .09*y), int(38 - .16*y), int(53 - .18*y), 255)

def chunk(kind, data):
    return struct.pack(">I", len(data)) + kind + data + struct.pack(">I", zlib.crc32(kind+data))

def icon(size, filename):
    rows = []
    for y in range(size):
        row = bytearray([0])
        for x in range(size):
            rgba = [pixel((x + (i+.5)/4) * 100/size, (y + (j+.5)/4) * 100/size)
                    for j in range(4) for i in range(4)]
            alpha = sum(v[3] for v in rgba)
            row.extend([round(sum(v[k]*v[3] for v in rgba)/alpha) if alpha else 0
                        for k in range(3)] + [round(alpha/16)])
        rows.append(bytes(row))
    header = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    (OUT/filename).write_bytes(b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", header)
                                + chunk(b"IDAT", zlib.compress(b"".join(rows))) + chunk(b"IEND", b""))

icon(80, "icon.png")
icon(130, "largeIcon.png")
