#!/usr/bin/env python3
"""Build the Dietz Bookkeeping 1200x630 social sharing card from local brand assets.

No remotely-hosted images, synthetic portraits, or licensed font downloads.
Re-run with: python -m pip install Pillow && python scripts/generate_social_image.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "public" / "images"
DESTINATION = ASSET_DIR / "dietzbookkeeping-social-1200x630.jpg"
WIDTH, HEIGHT = 1200, 630

def font(size: int, bold: bool = False):
    paths = (
        ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
         "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf"]
        if bold else
        ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
         "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf"]
    )
    for path in paths:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()

def fit_text(draw, value, max_width, initial_size, minimum_size, bold=True):
    for size in range(initial_size, minimum_size - 1, -1):
        chosen = font(size, bold=bold)
        if draw.textbbox((0, 0), value, font=chosen)[2] <= max_width:
            return chosen
    raise ValueError(f"Text doesn't fit in {max_width}px: {value}")

def main():
    portrait_file = ASSET_DIR / "dietzbookeepingabout.webp"
    logo_file = ASSET_DIR / "dietzbookkeepinglogotampafl.webp"
    if not portrait_file.is_file() or not logo_file.is_file():
        raise SystemExit("Missing local source assets; do not download external replacements")

    # Clean, cool-white background matching the current website's blue/navy.
    image = Image.new("RGB", (WIDTH, HEIGHT), (248, 251, 255))
    pixels = image.load()
    for y in range(HEIGHT):
        for x in range(WIDTH):
            t = min(1.0, 0.30 * x / WIDTH + 0.7 * y / HEIGHT)
            pixels[x, y] = (
                int(249 * (1 - t) + 231 * t),
                int(251 * (1 - t) + 241 * t),
                255,
            )

    draw = ImageDraw.Draw(image, "RGB")
    navy, blue, slate = (19, 30, 54), (31, 97, 230), (81, 99, 127)
    draw.rounded_rectangle((38, 30, 1162, 596), radius=32, fill=(255, 255, 255))
    draw.rounded_rectangle((40, 32, 1159, 594), radius=30, outline=(213, 227, 246), width=2)

    # Soft, fixed decorative shapes, safely behind the portrait.
    draw.ellipse((714, 10, 1280, 610), fill=(229, 239, 255))
    draw.ellipse((884, 358, 1296, 770), fill=(212, 229, 255))

    # Use the exact brand logo already owned by the site.
    with Image.open(logo_file) as raw_logo:
        logo = raw_logo.convert("RGBA")
        logo.thumbnail((270, 110), Image.Resampling.LANCZOS)
        # Composite against white so any source transparency stays clean in JPG.
        white_logo = Image.new("RGBA", logo.size, (255, 255, 255, 255))
        white_logo.alpha_composite(logo)
        image.paste(white_logo.convert("RGB"), (70, 59))
    draw.line((73, 178, 679, 178), fill=(229, 236, 248), width=2)

    # Keep text readable when Facebook/LinkedIn downscale the thumbnail.
    draw.text((74, 207), "TAMPA-BASED  ·  SERVING BUSINESSES NATIONWIDE",
              font=fit_text(draw, "TAMPA-BASED  ·  SERVING BUSINESSES NATIONWIDE", 630, 20, 15),
              fill=blue)
    lines = [
        ("Monthly Bookkeeping", navy, 272, 52),
        ("for Growing Service", blue, 341, 51),
        ("Businesses", blue, 410, 55),
    ]
    for label, color, top, size in lines:
        draw.text((72, top), label, font=fit_text(draw, label, 650, size, 35), fill=color)

    draw.text((74, 495), "Clear records. Better decisions.",
              font=fit_text(draw, "Clear records. Better decisions.", 650, 25, 19, bold=False), fill=slate)
    draw.text((74, 541), "Monthly bookkeeping  ·  Cleanup  ·  QuickBooks",
              font=fit_text(draw, "Monthly bookkeeping  ·  Cleanup  ·  QuickBooks", 655, 18, 15, bold=False),
              fill=navy)

    # Portrait is a direct copy of the existing local, on-site photo; no AI alteration.
    with Image.open(portrait_file) as source:
        portrait = ImageOps.fit(source.convert("RGB"), (365, 486),
                                method=Image.Resampling.LANCZOS, centering=(0.50, 0.42))
    photo_x, photo_y = 787, 69
    frame = Image.new("L", portrait.size, 0)
    ImageDraw.Draw(frame).rounded_rectangle((0, 0, 364, 485), radius=22, fill=255)
    image.paste(portrait, (photo_x, photo_y), frame)
    draw.rounded_rectangle((photo_x, photo_y, photo_x + 364, photo_y + 485),
                           radius=22, outline=(199, 216, 243), width=3)
    # A solid bottom caption makes the face visible even in smaller thumbnails.
    draw.rounded_rectangle((792, 514, 1147, 572), radius=14, fill=(18, 43, 94))
    caption = "Work directly with Bryan Dietz"
    draw.text((807, 531), caption, font=fit_text(draw, caption, 324, 20, 16), fill=(255, 255, 255))

    # Use an explicit JPG rather than SVG, which sharing services may not support.
    image.save(DESTINATION, format="JPEG", quality=85, optimize=True, progressive=True, subsampling=0)
    with Image.open(DESTINATION) as verified:
        assert verified.size == (1200, 630), verified.size
    print(f"Created {DESTINATION.relative_to(ROOT)} ({DESTINATION.stat().st_size} bytes)")

if __name__ == "__main__":
    main()
