#!/usr/bin/env python3
"""Generate Mediterranean-sunset app icons for the Spain trip planner.
Pure stdlib (zlib+struct) PNG encoder — no Pillow needed.
Outputs: apple-touch-icon (180), favicon 32/16, favicon.ico, icon-512 (any),
and icon-512-maskable (motif inside a safe zone for Android adaptive masks)."""
import zlib, struct, math, os

OUT = "/Users/wangzi/Applications/Claude-Cowork/spain-trip"

RED  = (216, 65, 47)
GOLD = (245, 170, 30)
SUN  = (255, 243, 205)
SEA_T= (40, 152, 207)
SEA_B= (18, 78, 140)

def mix(c1, c2, t):
    t = 0.0 if t < 0 else (1.0 if t > 1 else t)
    return (int(round(c1[0]+(c2[0]-c1[0])*t)),
            int(round(c1[1]+(c2[1]-c1[1])*t)),
            int(round(c1[2]+(c2[2]-c1[2])*t)))

def sky(nx, ny):
    return mix(RED, GOLD, (nx + ny) / 2.0)

def add_sun(col, nx, ny):
    scx, scy, sr = 0.5, 0.40, 0.205
    d = math.hypot(nx - scx, ny - scy)
    if d < sr:
        return mix(SUN, col, (d / sr) ** 1.5)
    glow = 1.0 - (d - sr) / 0.16
    return mix(col, SUN, glow * 0.28) if glow > 0 else col

def add_sea(col, nx, ny):
    sea_top = 0.70 + 0.028 * math.sin(nx * math.pi * 4.0)
    if ny <= sea_top:
        return col
    tt = (ny - sea_top) / (1.0 - sea_top)
    sea = mix(SEA_T, SEA_B, tt)
    refl = max(0.0, 1.0 - abs(nx - 0.5) / 0.17) * max(0.0, 1.0 - (ny - sea_top) / 0.20)
    return mix(sea, SUN, refl * 0.55)

def shade(nx, ny):
    return add_sea(add_sun(sky(nx, ny), nx, ny), nx, ny)

def shade_mask(nx, ny):
    # full-bleed sky (safe to crop) + sun/sea motif confined to the inner safe zone
    col = sky(nx, ny)
    pad = 0.17
    if pad <= nx <= 1 - pad and pad <= ny <= 1 - pad:
        ix = (nx - pad) / (1 - 2 * pad)
        iy = (ny - pad) / (1 - 2 * pad)
        col = add_sea(add_sun(col, ix, iy), ix, iy)
    return col

def render(size, ss, fn):
    W = size * ss
    buf = [fn(x / (W - 1), y / (W - 1)) for y in range(W) for x in range(W)]
    out = bytearray()
    n = ss * ss
    for oy in range(size):
        out.append(0)
        for ox in range(size):
            r = g = b = 0
            for dy in range(ss):
                row = (oy * ss + dy) * W
                for dx in range(ss):
                    c = buf[row + ox * ss + dx]
                    r += c[0]; g += c[1]; b += c[2]
            out += bytes((r // n, g // n, b // n))
    return bytes(out)

def png(size, ss, fn=shade):
    raw = render(size, ss, fn)
    def chunk(typ, data):
        return (struct.pack(">I", len(data)) + typ + data
                + struct.pack(">I", zlib.crc32(typ + data) & 0xffffffff))
    return (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw, 9))
            + chunk(b"IEND", b""))

def ico(png_bytes, size):
    return (struct.pack("<HHH", 0, 1, 1)
            + struct.pack("<BBBBHHII", size, size, 0, 0, 1, 32, len(png_bytes), 22)
            + png_bytes)

files = {
    "apple-touch-icon.png":  png(180, 3),
    "favicon-32.png":        png(32, 4),
    "favicon-16.png":        png(16, 4),
    "icon-512.png":          png(512, 2),
    "icon-512-maskable.png": png(512, 2, shade_mask),
}
for name, data in files.items():
    with open(os.path.join(OUT, name), "wb") as f:
        f.write(data)
    print(f"wrote {name:24} {len(data):7} bytes")

ico_bytes = ico(files["favicon-32.png"], 32)
with open(os.path.join(OUT, "favicon.ico"), "wb") as f:
    f.write(ico_bytes)
print(f"wrote {'favicon.ico':24} {len(ico_bytes):7} bytes")
print("done.")
