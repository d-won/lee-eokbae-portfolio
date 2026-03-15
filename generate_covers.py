#!/usr/bin/env python3
"""Generate stylized book cover images for Lee Uk-bae's portfolio."""

from PIL import Image, ImageDraw, ImageFont
import os, math, random

random.seed(42)

IMG_DIR = os.path.join(os.path.dirname(__file__), 'images')
os.makedirs(IMG_DIR, exist_ok=True)

W, H = 400, 533  # 3:4 aspect ratio

# Korean traditional colors
COLORS = {
    'bomi': {'bg': '#6B9080', 'accent': '#F0E6D3', 'text': '#FFFFFF', 'sub': '#A8C5A0'},
    'halfboy': {'bg': '#B8A590', 'accent': '#3C6E47', 'text': '#2C2420', 'sub': '#E8D5B7'},
    'jaljaljal': {'bg': '#E8D5B7', 'accent': '#8B4513', 'text': '#3C2A1A', 'sub': '#C4956A'},
    'gaegujangi': {'bg': '#5A8A9A', 'accent': '#F0E6D3', 'text': '#FFFFFF', 'sub': '#A8C5C0'},
    'mandu': {'bg': '#D4C4A0', 'accent': '#8B2500', 'text': '#2C2420', 'sub': '#C4956A'},
}

BOOKS = [
    ('bomi', '봄이의\n여행', '이억배 글 · 그림', '이야기꽃 · 2019'),
    ('halfboy', '반쪽이', '이미애 글 · 이억배 그림', '보림 · 1997'),
    ('jaljaljal', '잘잘잘\n123', '이억배 글 · 그림', '사계절 · 2008'),
    ('gaegujangi', '개구쟁이\nㄱㄴㄷ', '이억배 글 · 그림', '사계절 · 2005'),
    ('mandu', '손 큰 할머니의\n만두 만들기', '채인선 글 · 이억배 그림', '재미마주 · 2001'),
]


def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))


def draw_hanji_texture(draw, w, h, base_color):
    """Add subtle hanji (Korean paper) texture."""
    r, g, b = hex_to_rgb(base_color)
    for _ in range(800):
        x = random.randint(0, w-1)
        y = random.randint(0, h-1)
        dr = random.randint(-8, 8)
        dg = random.randint(-8, 8)
        db = random.randint(-8, 8)
        cr = max(0, min(255, r + dr))
        cg = max(0, min(255, g + dg))
        cb = max(0, min(255, b + db))
        draw.point((x, y), fill=(cr, cg, cb))


def draw_brush_strokes(draw, w, h, color, count=5):
    """Draw decorative brush stroke elements."""
    r, g, b = hex_to_rgb(color)
    for _ in range(count):
        x1 = random.randint(int(w*0.1), int(w*0.9))
        y1 = random.randint(int(h*0.15), int(h*0.5))
        length = random.randint(30, 80)
        angle = random.uniform(-0.5, 0.5)
        thickness = random.randint(2, 6)
        x2 = x1 + int(length * math.cos(angle))
        y2 = y1 + int(length * math.sin(angle))
        alpha = random.randint(30, 80)
        draw.line([(x1, y1), (x2, y2)], fill=(r, g, b, alpha), width=thickness)


def draw_border_frame(draw, w, h, color):
    """Draw a traditional Korean-style double border."""
    r, g, b = hex_to_rgb(color)
    # Outer border
    draw.rectangle([(15, 15), (w-16, h-16)], outline=(r, g, b, 120), width=2)
    # Inner border
    draw.rectangle([(25, 25), (w-26, h-26)], outline=(r, g, b, 80), width=1)


def draw_circle_motif(draw, w, h, color):
    """Draw a traditional circle motif."""
    r, g, b = hex_to_rgb(color)
    cx, cy = w // 2, int(h * 0.35)
    radius = 60
    draw.ellipse([(cx-radius, cy-radius), (cx+radius, cy+radius)],
                 outline=(r, g, b, 100), width=2)
    draw.ellipse([(cx-radius+8, cy-radius+8), (cx+radius-8, cy+radius-8)],
                 outline=(r, g, b, 60), width=1)


def create_cover(book_id, title, author, pub_info):
    colors = COLORS[book_id]
    img = Image.new('RGBA', (W, H), hex_to_rgb(colors['bg']) + (255,))
    draw = ImageDraw.Draw(img, 'RGBA')

    # Hanji texture
    draw_hanji_texture(draw, W, H, colors['bg'])

    # Border frame
    draw_border_frame(draw, W, H, colors['accent'])

    # Circle motif
    draw_circle_motif(draw, W, H, colors['sub'])

    # Brush strokes decoration
    draw_brush_strokes(draw, W, H, colors['sub'], count=7)

    # Title text - try to use a system font, fallback to default
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc", 38)
    except (OSError, IOError):
        try:
            title_font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 38)
        except (OSError, IOError):
            title_font = ImageFont.load_default()

    try:
        author_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc", 16)
    except (OSError, IOError):
        try:
            author_font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc", 16)
        except (OSError, IOError):
            author_font = ImageFont.load_default()

    try:
        pub_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc", 13)
    except (OSError, IOError):
        try:
            pub_font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc", 13)
        except (OSError, IOError):
            pub_font = ImageFont.load_default()

    # Draw title
    lines = title.split('\n')
    y_start = int(H * 0.45)
    line_height = 50
    total_height = len(lines) * line_height
    y = y_start - total_height // 2

    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=title_font)
        tw = bbox[2] - bbox[0]
        x = (W - tw) // 2
        # Shadow
        draw.text((x+2, y+2), line, fill=hex_to_rgb(colors['bg']), font=title_font)
        # Main text
        draw.text((x, y), line, fill=hex_to_rgb(colors['text']), font=title_font)
        y += line_height

    # Author
    y = int(H * 0.78)
    bbox = draw.textbbox((0, 0), author, font=author_font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x, y), author, fill=hex_to_rgb(colors['text']), font=author_font)

    # Publisher
    y = int(H * 0.85)
    bbox = draw.textbbox((0, 0), pub_info, font=pub_font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    r, g, b = hex_to_rgb(colors['sub'])
    draw.text((x, y), pub_info, fill=(r, g, b, 200), font=pub_font)

    # Decorative line under author
    line_y = int(H * 0.82)
    ar, ag, ab = hex_to_rgb(colors['accent'])
    draw.line([(W//2-40, line_y), (W//2+40, line_y)], fill=(ar, ag, ab, 100), width=1)

    # Save as PNG (convert RGBA to RGB)
    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
    rgb_img.paste(img, mask=img.split()[3])
    out_path = os.path.join(IMG_DIR, f'{book_id}.jpg')
    rgb_img.save(out_path, 'JPEG', quality=90)
    print(f'Created: {out_path}')


def create_author_portrait():
    """Create a stylized author portrait placeholder."""
    w, h = 400, 533
    img = Image.new('RGBA', (w, h), (240, 230, 211, 255))
    draw = ImageDraw.Draw(img, 'RGBA')

    # Hanji texture
    draw_hanji_texture(draw, w, h, '#F0E6D3')

    # Border
    draw.rectangle([(10, 10), (w-11, h-11)], outline=(139, 69, 19, 80), width=2)
    draw.rectangle([(18, 18), (w-19, h-19)], outline=(139, 69, 19, 40), width=1)

    # Person silhouette (head)
    cx, cy = w//2, int(h*0.32)
    head_r = 55
    draw.ellipse([(cx-head_r, cy-head_r), (cx+head_r, cy+head_r)],
                 fill=(180, 160, 140, 60), outline=(139, 69, 19, 60), width=2)

    # Body silhouette
    draw.arc([(cx-85, cy+40), (cx+85, cy+170)], 0, 180,
             fill=(139, 69, 19, 50), width=2)

    try:
        name_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc", 30)
    except (OSError, IOError):
        try:
            name_font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 30)
        except (OSError, IOError):
            name_font = ImageFont.load_default()

    try:
        sub_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc", 16)
    except (OSError, IOError):
        try:
            sub_font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc", 16)
        except (OSError, IOError):
            sub_font = ImageFont.load_default()

    # Name
    name = "이억배"
    bbox = draw.textbbox((0, 0), name, font=name_font)
    tw = bbox[2] - bbox[0]
    draw.text(((w-tw)//2, int(h*0.62)), name, fill=(60, 42, 26), font=name_font)

    # Subtitle
    sub = "그림책 작가 · 1960~"
    bbox = draw.textbbox((0, 0), sub, font=sub_font)
    tw = bbox[2] - bbox[0]
    draw.text(((w-tw)//2, int(h*0.72)), sub, fill=(139, 69, 19, 180), font=sub_font)

    # Brush stroke decoration
    for i in range(3):
        x = w//2 - 30 + i*30
        y = int(h*0.80)
        draw.line([(x, y), (x + random.randint(5, 15), y + random.randint(3, 8))],
                  fill=(139, 69, 19, 40), width=2)

    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
    rgb_img.paste(img, mask=img.split()[3])
    out_path = os.path.join(IMG_DIR, 'author.jpg')
    rgb_img.save(out_path, 'JPEG', quality=90)
    print(f'Created: {out_path}')


if __name__ == '__main__':
    # Check for Korean fonts
    font_dirs = ['/usr/share/fonts/truetype/', '/usr/share/fonts/opentype/', '/usr/share/fonts/']
    print("Searching for Korean fonts...")
    for fd in font_dirs:
        if os.path.exists(fd):
            for root, dirs, files in os.walk(fd):
                for f in files:
                    if 'noto' in f.lower() and ('cjk' in f.lower() or 'kr' in f.lower()):
                        print(f"  Found: {os.path.join(root, f)}")

    for book_id, title, author, pub in BOOKS:
        create_cover(book_id, title, author, pub)

    create_author_portrait()
    print("\nAll images generated!")
