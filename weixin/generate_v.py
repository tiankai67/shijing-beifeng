# 生成《邶风·静女》竖排长图（公众号图文素材）
from PIL import Image, ImageDraw, ImageFont
import os

FONT = "/c/Windows/Fonts/simkai.ttf"
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "静女_竖排长图.png")

title = "邶风·静女"
pinyin = "jìng nǚ"
theme = "爱情之美"
chapters = [
    ["静女其姝", "俟我于城隅", "爱而不见", "搔首踟蹰"],
    ["静女其娈", "贻我彤管", "彤管有炜", "说怿女美"],
    ["自牧归荑", "洵美且异", "匪女之为美", "美人之贻"],
]
bottom_text = "出自《诗经·邶风》"
seal_text = "邶风"

paper = (247, 241, 228)
ink = (38, 28, 22)
red = (158, 43, 37)
faint = (206, 190, 158)

margin = 56
col_w = 56
line_h = 54
top_pad = 64
title_h = 150
gap_after_title = 26
gap_before_bottom = 46
bottom_h = 130

max_chars = max(len(s) for ch in chapters for s in ch)
content_h = max_chars * line_h
cols = len(chapters) * 4 + (len(chapters) - 1)
W = margin * 2 + cols * col_w
H = top_pad + title_h + gap_after_title + content_h + gap_before_bottom + bottom_h

f_title = ImageFont.truetype(FONT, 58)
f_py = ImageFont.truetype(FONT, 26)
f_char = ImageFont.truetype(FONT, 44)
f_bottom = ImageFont.truetype(FONT, 24)
f_seal = ImageFont.truetype(FONT, 32)

img = Image.new("RGB", (W, H), paper)
d = ImageDraw.Draw(img)

# 双线边框
d.rectangle([18, 18, W - 18, H - 18], outline=faint, width=2)
d.rectangle([26, 26, W - 26, H - 26], outline=faint, width=1)

# 标题
d.text((W // 2, top_pad + 34), title, font=f_title, fill=red, anchor="mm")
d.text((W // 2, top_pad + 96), pinyin, font=f_py, fill=ink, anchor="mm")
d.text((W // 2, top_pad + 132), "❖ " + theme, font=f_py, fill=ink, anchor="mm")

# 竖排正文（从右到左，章间留空列）
y_top = top_pad + title_h + gap_after_title
x = W - margin - col_w // 2
for ci, ch in enumerate(chapters):
    for sent in ch:
        for i, c in enumerate(sent):
            d.text((x, y_top + i * line_h + line_h // 2), c, font=f_char, fill=ink, anchor="mm")
        x -= col_w
    if ci < len(chapters) - 1:
        x -= col_w

# 底部印章 + 出处
seal_size = 82
sx = margin + 8
sy = H - bottom_h - 6
d.rectangle([sx, sy, sx + seal_size, sy + seal_size], outline=red, width=3)
d.text((sx + seal_size // 2, sy + seal_size // 2), seal_text, font=f_seal, fill=red, anchor="mm")
d.text((sx + seal_size + 28, sy + seal_size // 2), bottom_text, font=f_bottom, fill=ink, anchor="lm")

img.save(OUT)
print("saved", OUT, "size", W, "x", H)
