import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

os.makedirs('assets/merch', exist_ok=True)

# Load master photography as textured background base
base_img = Image.open('assets/merchandising_planb.jpg').convert('RGB')
wood_img = Image.open('assets/ambiente_cybercafe.jpg').convert('RGB')

font_bold = ImageFont.truetype('/usr/share/fonts/Adwaita/AdwaitaMono-Bold.ttf', 22)
font_title = ImageFont.truetype('/usr/share/fonts/Adwaita/AdwaitaMono-Bold.ttf', 28)
font_sub = ImageFont.truetype('/usr/share/fonts/Adwaita/AdwaitaMono-Regular.ttf', 14)
font_badge = ImageFont.truetype('/usr/share/fonts/Adwaita/AdwaitaMono-Bold.ttf', 12)
font_icon = ImageFont.truetype('/usr/share/fonts/Adwaita/AdwaitaMono-Bold.ttf', 18)

def create_base_canvas(crop_box=None, darken=0.65, blur=1):
    w, h = 640, 420
    if crop_box:
        sub = base_img.crop(crop_box).resize((w, h), Image.Resampling.LANCZOS)
    else:
        sub = base_img.resize((w, h), Image.Resampling.LANCZOS)
    
    if blur > 0:
        sub = sub.filter(ImageFilter.GaussianBlur(blur))
    
    enhancer = ImageEnhance.Brightness(sub)
    sub = enhancer.enhance(darken)
    
    # Warm amber vignette & terminal overlay
    overlay = Image.new('RGBA', (w, h), (12, 8, 6, 90))
    sub = Image.alpha_composite(sub.convert('RGBA'), overlay)
    return sub

# 1. CANECA CERÂMICA ARTESANAL
def make_caneca():
    # Crop around the ceramic mug in the original flat-lay
    # The mug in merchandising_planb is typically in the upper-middle/right
    canvas = create_base_canvas(crop_box=(400, 100, 1000, 600), darken=0.9, blur=0).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # Elegant HUD overlay
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(15, 15), (70, 15)], fill=(224, 139, 62))
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "CERÂMICA 350ML", font=font_badge, fill=(255, 170, 91))
    
    # Bottom HUD caption
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "CANECA ARTESANAL // SPEC BREW", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "Vidrado fosco duplo de Barcelos & Carimbo ASCII entalhado", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 19.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_caneca.jpg', quality=95)

# 2. T-SHIRT "STACK OVERFLOW"
def make_tshirt():
    canvas = create_base_canvas(crop_box=(150, 150, 850, 700), darken=0.75, blur=1).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # Graphic mock representation of folded washed black shirt
    t_box = [(170, 50), (470, 320)]
    draw.rounded_rectangle(t_box, radius=12, fill=(24, 20, 18), outline=(60, 45, 38), width=2)
    # Fold texture & collar
    draw.arc([(270, 40), (370, 80)], start=0, end=180, fill=(45, 35, 30), width=4)
    
    # Terminal graphic printed on chest
    draw.rectangle([(210, 105), (430, 245)], fill=(14, 10, 8), outline=(224, 139, 62), width=1)
    draw.text((225, 115), "HTTP 418 // TEAPOT", font=font_badge, fill=(255, 170, 91))
    draw.text((225, 135), "--------------------", font=font_sub, fill=(107, 62, 33))
    draw.text((225, 150), "while(coffee.sip()):", font=font_sub, fill=(250, 238, 221))
    draw.text((245, 170), "code.compile()", font=font_sub, fill=(92, 219, 149))
    draw.text((245, 190), "eat(paodelo)", font=font_sub, fill=(255, 170, 91))
    draw.text((225, 215), "// PLAN B CYBERCAFÉ", font=font_badge, fill=(150, 125, 106))
    
    # Outer frame
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "ALGODÃO 240G", font=font_badge, fill=(255, 170, 91))
    
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "T-SHIRT // STACK OVERFLOW", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "Heavyweight 240 gsm preto vintage desbotado com estampa âmbar", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 28.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_tshirt.jpg', quality=95)

# 3. MOUSE PAD / DESK MAT XXL (900x400)
def make_mousepad():
    canvas = create_base_canvas(crop_box=(100, 200, 1200, 750), darken=0.7, blur=1).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # Desk mat rectangle on table
    mat_box = [(70, 55), (570, 310)]
    draw.rounded_rectangle(mat_box, radius=8, fill=(16, 13, 11), outline=(224, 139, 62), width=2)
    
    # Grid lines on desk mat
    for x in range(90, 560, 40):
        draw.line([(x, 65), (x, 300)], fill=(45, 30, 20), width=1)
    for y in range(75, 300, 35):
        draw.line([(80, y), (560, y)], fill=(45, 30, 20), width=1)
    
    # Center blueprint / ASCII circuit
    draw.rectangle([(200, 110), (440, 250)], fill=(10, 7, 5, 230), outline=(107, 62, 33), width=1)
    draw.text((220, 125), "+--------------------+", font=font_sub, fill=(224, 139, 62))
    draw.text((220, 145), "| PLAN B // DESK_MAT |", font=font_sub, fill=(250, 238, 221))
    draw.text((220, 165), "| 900 x 400 x 4 MM   |", font=font_sub, fill=(255, 170, 91))
    draw.text((220, 185), "| UNIX TERMINAL GRID |", font=font_sub, fill=(150, 125, 106))
    draw.text((220, 205), "+--------------------+", font=font_sub, fill=(224, 139, 62))
    draw.text((220, 225), "shortcuts: :w :q :x :tabn", font=font_badge, fill=(92, 219, 149))
    
    # Outer frame & bottom text
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "DESK MAT XXL", font=font_badge, fill=(255, 170, 91))
    
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "DESK MAT XXL // TERMINAL GRID", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "900x400x4mm microfibra ultra-precisa, base antiderrapante e atalhos Vim", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 32.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_mousepad.jpg', quality=95)

# 4. BROCHES METÁLICOS (ENAMEL PINS)
def make_broches():
    canvas = create_base_canvas(crop_box=(300, 150, 1100, 700), darken=0.6, blur=1).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # Display 3 enamel pins
    # Pin 1: Coffee Cup Pin (Gold / Black)
    p1_center = (170, 185)
    draw.ellipse([(p1_center[0]-70, p1_center[1]-70), (p1_center[0]+70, p1_center[1]+70)], fill=(20, 14, 10), outline=(245, 195, 134), width=4)
    draw.ellipse([(p1_center[0]-63, p1_center[1]-63), (p1_center[0]+63, p1_center[1]+63)], outline=(107, 62, 33), width=2)
    draw.text((p1_center[0]-32, p1_center[1]-30), "( ) ( )", font=font_icon, fill=(245, 195, 134))
    draw.text((p1_center[0]-42, p1_center[1]-5), "< CAFE >", font=font_bold, fill=(255, 170, 91))
    draw.text((p1_center[0]-35, p1_center[1]+22), "PLAN B", font=font_badge, fill=(250, 238, 221))
    
    # Pin 2: Terminal Cursor Key Pin
    p2_center = (325, 185)
    draw.rounded_rectangle([(p2_center[0]-65, p2_center[1]-65), (p2_center[0]+65, p2_center[1]+65)], radius=14, fill=(15, 12, 10), outline=(224, 139, 62), width=4)
    draw.text((p2_center[0]-40, p2_center[1]-28), ">_ ROOT", font=font_bold, fill=(255, 170, 91))
    draw.text((p2_center[0]-35, p2_center[1]+5), "ACCESS", font=font_sub, fill=(92, 219, 149))
    draw.text((p2_center[0]-42, p2_center[1]+28), "EST. 2026", font=font_badge, fill=(150, 125, 106))
    
    # Pin 3: Mil-Folhas Pastry Hexagon Pin
    p3_center = (480, 185)
    draw.ellipse([(p3_center[0]-70, p3_center[1]-70), (p3_center[0]+70, p3_center[1]+70)], fill=(22, 16, 12), outline=(245, 195, 134), width=4)
    draw.text((p3_center[0]-48, p3_center[1]-30), "[===" * 2 + "]", font=font_badge, fill=(245, 195, 134))
    draw.text((p3_center[0]-46, p3_center[1]-8), "MIL-FOLHAS", font=font_badge, fill=(255, 170, 91))
    draw.text((p3_center[0]-42, p3_center[1]+15), "DE CAFÉ", font=font_sub, fill=(250, 238, 221))
    
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "PACK 3X PINS", font=font_badge, fill=(255, 170, 91))
    
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "BROCHES METÁLICOS // HARD ENAMEL PINS", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "Trio de pins em latão polido dourado e esmalte preto: Chávena, Root e Mil-Folhas", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 14.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_broches.jpg', quality=95)

# 5. CADERNO DE ENGENHARIA & CANETA TÁTICA
def make_caderno():
    canvas = create_base_canvas(crop_box=(200, 100, 900, 650), darken=0.7, blur=1).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # Hardcover notebook representation
    nb_box = [(120, 60), (450, 320)]
    draw.rounded_rectangle(nb_box, radius=8, fill=(28, 18, 12), outline=(107, 62, 33), width=2)
    # Spine & elastic band in amber
    draw.rectangle([(120, 60), (145, 320)], fill=(20, 12, 8))
    draw.line([(145, 60), (145, 320)], fill=(224, 139, 62), width=2)
    draw.rectangle([(400, 60), (414, 320)], fill=(224, 139, 62))
    
    # Gold foil embossed text on notebook cover
    draw.rectangle([(175, 120), (380, 240)], fill=(20, 14, 10), outline=(224, 139, 62), width=1)
    draw.text((195, 135), "[PLAN B] // LAB", font=font_bold, fill=(255, 170, 91))
    draw.text((195, 165), "ENGINEERING LOG", font=font_sub, fill=(250, 238, 221))
    draw.text((195, 190), "120 GSM DOT GRID", font=font_badge, fill=(150, 125, 106))
    draw.text((195, 210), "PORTO / LISBOA", font=font_badge, fill=(224, 139, 62))
    
    # Tactical Pen resting beside notebook
    pen_start = (480, 70)
    pen_end = (520, 310)
    draw.line([pen_start, pen_end], fill=(15, 12, 10), width=14)
    draw.line([pen_start, pen_end], fill=(224, 139, 62), width=4)
    draw.line([(480, 80), (488, 140)], fill=(255, 170, 91), width=5) # Clip
    
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "CADERNO + CANETA", font=font_badge, fill=(255, 170, 91))
    
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "CADERNO DE ENGENHARIA & CANETA DE METAL", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "Capa dura linho nogueira, papel pontilhado 120gsm e caneta tática de latão", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 22.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_caderno_caneta.jpg', quality=95)

# 6. PACK AUTOCOLANTES (STICKERS)
def make_autocolantes():
    canvas = create_base_canvas(crop_box=(500, 250, 1250, 750), darken=0.6, blur=1).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # 4 distinct die-cut stickers laid out
    # Sticker 1
    s1 = [(70, 80), (280, 175)]
    draw.rounded_rectangle(s1, radius=8, fill=(18, 14, 12), outline=(255, 255, 255), width=2)
    draw.text((85, 100), "sudo eat-paodelo", font=font_bold, fill=(255, 170, 91))
    draw.text((85, 135), "[ROOT PRIVILEGES OK]", font=font_badge, fill=(92, 219, 149))
    
    # Sticker 2
    s2 = [(320, 70), (560, 160)]
    draw.rounded_rectangle(s2, radius=8, fill=(25, 18, 14), outline=(255, 255, 255), width=2)
    draw.text((335, 88), "milfolhas.overflow()", font=font_bold, fill=(250, 238, 221))
    draw.text((335, 122), "CRUNCH LEVEL: 100%", font=font_badge, fill=(224, 139, 62))
    
    # Sticker 3
    s3 = [(90, 200), (310, 290)]
    draw.rounded_rectangle(s3, radius=8, fill=(12, 9, 7), outline=(255, 255, 255), width=2)
    draw.text((105, 215), "localhost:8080/coffee", font=font_bold, fill=(92, 219, 149))
    draw.text((105, 248), "STATUS: 200 FRESH BREW", font=font_badge, fill=(255, 170, 91))
    
    # Sticker 4
    s4 = [(340, 185), (570, 295)]
    draw.rounded_rectangle(s4, radius=8, fill=(20, 15, 12), outline=(255, 255, 255), width=2)
    draw.text((360, 200), "( ) ( )  PLAN B", font=font_bold, fill=(255, 170, 91))
    draw.text((360, 230), "< CAFE > CYBERCAFÉ", font=font_sub, fill=(250, 238, 221))
    draw.text((360, 258), "PORTO // LISBOA", font=font_badge, fill=(150, 125, 106))
    
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "PACK 6X VINIL", font=font_badge, fill=(255, 170, 91))
    
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "PACK AUTOCOLANTES // MATTE VINYL STICKERS", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "Vinil mate laminado resistente a água e raios UV para portáteis e garrafas", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 6.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_autocolantes.jpg', quality=95)

# 7. HOODIE "KERNEL PANIC" (450 GSM)
def make_hoodie():
    canvas = create_base_canvas(crop_box=(50, 50, 650, 550), darken=0.8, blur=0).convert('RGB')
    draw = ImageDraw.Draw(canvas)
    
    # Graphic mock representation of luxury folded hoodie
    h_box = [(160, 40), (480, 320)]
    draw.rounded_rectangle(h_box, radius=16, fill=(20, 14, 10), outline=(60, 40, 30), width=2)
    # Hood fold & drawstring
    draw.arc([(260, 35), (380, 85)], start=0, end=180, fill=(35, 25, 18), width=5)
    draw.line([(290, 80), (285, 160)], fill=(212, 190, 170), width=3) # String 1
    draw.line([(350, 80), (355, 160)], fill=(212, 190, 170), width=3) # String 2
    
    # Embroidered chest badge
    draw.rectangle([(260, 180), (380, 250)], fill=(14, 10, 8), outline=(224, 139, 62), width=1)
    draw.text((275, 192), "( ) ( )", font=font_sub, fill=(250, 238, 221))
    draw.text((275, 212), "[PLAN B]", font=font_bold, fill=(255, 170, 91))
    draw.text((275, 232), "450 GSM", font=font_badge, fill=(150, 125, 106))
    
    draw.rectangle([(20, 20), (620, 400)], outline=(107, 62, 33), width=1)
    draw.rectangle([(25, 25), (140, 52)], fill=(18, 12, 9, 220), outline=(224, 139, 62))
    draw.text((35, 30), "HOODIE 450 GSM", font=font_badge, fill=(255, 170, 91))
    
    draw.rectangle([(20, 340), (620, 400)], fill=(12, 8, 6, 230))
    draw.line([(20, 340), (620, 340)], fill=(224, 139, 62), width=1)
    draw.text((35, 348), "HOODIE // KERNEL PANIC (450 GSM)", font=font_bold, fill=(250, 238, 221))
    draw.text((35, 375), "100% Algodão francês orgânico pesado, tom café torrado e bordado tonal", font=font_sub, fill=(212, 190, 170))
    draw.text((530, 355), "€ 58.00", font=font_bold, fill=(255, 170, 91))
    
    canvas.save('assets/merch/merch_hoodie.jpg', quality=95)

make_caneca()
make_tshirt()
make_mousepad()
make_broches()
make_caderno()
make_autocolantes()
make_hoodie()

print("All 7 merchandising product images generated successfully!")
