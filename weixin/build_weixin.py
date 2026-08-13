# -*- coding: utf-8 -*-
"""批量生成《诗经·邶风》公众号图文素材（竖排长图 PNG + 排版 HTML）。
参照静女样例（jingnv.html）的视觉与结构，参数化产出其余 18 篇。"""
import os, re, json
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
FONT = "/c/Windows/Fonts/simkai.ttf"
DATA = json.load(open(os.path.join(HERE, "poems.json"), encoding="utf8"))
POEMS = DATA["POEMS"]

# 每篇篇名下的小标签（与静女「华夏最早约会诗」同款）
TAGS = {
    "柏舟": "我心匪石 · 坚守本心",
    "绿衣": "睹物思人 · 悼亡之源",
    "燕燕": "万古送别之祖",
    "日月": "日月起兴 · 高古开阔",
    "终风": "思念悠悠 · 古俗嚏语",
    "击鼓": "最早爱情誓言",
    "凯风": "孝亲经典 · 七子之源",
    "雄雉": "瞻彼日月 · 思归难返",
    "匏有苦叶": "渡口痴等 · 清纯爱情",
    "谷风": "文旅慎选 · 弃妇之诗",
    "式微": "胡不归 · 归隐典故",
    "旄丘": "讥讽权贵 · 委婉尖锐",
    "简兮": "万舞雄健 · 乐舞画卷",
    "泉水": "卫女思归 · 魂牵故园",
    "北门": "文旅慎选 · 基层官吏",
    "北风": "患难相随 · 携手同归",
    "新台": "文旅慎选 · 政治讽刺",
    "二子乘舟": "舟影渐远 · 离散之思",
}

PAPER = (247, 241, 228); INK = (38, 28, 22); RED = (158, 43, 37); FAINT = (206, 190, 158)
# 高清参数：放大字号与像素、严格内缩边距，确保文字绝不越过朱砂双线框
FRAME_OUT = 30; FRAME_IN = 46          # 双线框偏移（外粗内细，朱砂红）
MARGIN = 100                           # 内容到外框的安全边距
COL_W = 84; LINE_H = 82; TOP_PAD = 100; TITLE_H = 224
GAP_AFTER_TITLE = 46; GAP_BEFORE_BOTTOM = 80; BOTTOM_H = 206
CHAR = 68; F_TITLE = 88; F_PY = 40; F_BOTTOM = 36; F_SEAL = 48


def make_chapters(poem):
    if poem.get("sensitive"):
        return [["原文从略"], ["文旅", "慎选"]]
    chapters = []
    for sent in poem["lines"]:
        parts = re.split(r"[，。、？！；：,.!?;:\s]+", sent)
        parts = [p for p in parts if p]
        chapters.append(parts if parts else [sent])
    return chapters


def gen_png(poem, out_path):
    title = "邶风·" + poem["title"]
    chapters = make_chapters(poem)
    max_chars = max((len(s) for ch in chapters for s in ch), default=1)
    cols = sum(len(ch) for ch in chapters) + (len(chapters) - 1)
    W = MARGIN * 2 + cols * COL_W
    # 按标题实际宽度抬高画布下限，确保红色标题（88px）始终不越过朱砂内框
    f_title = ImageFont.truetype(FONT, F_TITLE)
    tw = f_title.getlength(title)
    PAD_T = 28
    required = int(tw) + 2 * FRAME_IN + 2 * PAD_T
    if W < required:
        W = required
    H = TOP_PAD + TITLE_H + GAP_AFTER_TITLE + max_chars * LINE_H + GAP_BEFORE_BOTTOM + BOTTOM_H

    f_py = ImageFont.truetype(FONT, F_PY)
    f_char = ImageFont.truetype(FONT, CHAR)
    f_bottom = ImageFont.truetype(FONT, F_BOTTOM)
    f_seal = ImageFont.truetype(FONT, F_SEAL)

    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)
    # 朱砂红双线框（外粗内细）
    d.rectangle([FRAME_OUT, FRAME_OUT, W - FRAME_OUT, H - FRAME_OUT], outline=RED, width=4)
    d.rectangle([FRAME_IN, FRAME_IN, W - FRAME_IN, H - FRAME_IN], outline=RED, width=1)

    d.text((W // 2, TOP_PAD + 54), title, font=f_title, fill=RED, anchor="mm")
    d.text((W // 2, TOP_PAD + 130), poem["pinyin"], font=f_py, fill=INK, anchor="mm")
    d.text((W // 2, TOP_PAD + 182), "❖ " + poem["theme"], font=f_py, fill=INK, anchor="mm")

    y_top = TOP_PAD + TITLE_H + GAP_AFTER_TITLE
    x = W - MARGIN - COL_W // 2
    for ci, ch in enumerate(chapters):
        for sent in ch:
            for i, c in enumerate(sent):
                d.text((x, y_top + i * LINE_H + LINE_H // 2), c, font=f_char, fill=INK, anchor="mm")
            x -= COL_W
        if ci < len(chapters) - 1:
            x -= COL_W

    seal_size = 116
    sx = MARGIN + 14
    sy = H - BOTTOM_H - 14
    d.rectangle([sx, sy, sx + seal_size, sy + seal_size], outline=RED, width=4)
    d.text((sx + seal_size // 2, sy + seal_size // 2), "邶风", font=f_seal, fill=RED, anchor="mm")
    d.text((sx + seal_size + 38, sy + seal_size // 2), "出自《诗经》", font=f_bottom, fill=INK, anchor="lm")
    img.save(out_path)
    return W, H


def snippet(poem):
    if poem.get("sensitive"):
        return "文旅宣传·慎用"
    txt = re.sub(r"[，。、？！；：,.!?;:\s]+", "", poem["lines"][0])
    return txt[:10]


def gen_html(poem, img_name, next_poem):
    sensitive = poem.get("sensitive")
    tag = TAGS.get(poem["title"], poem["theme"])
    notes_html = "".join(
        f'<p style="font-size:15px;color:#4a3826;margin:4px 0;">{n["w"]}（{n["p"]}）：{n["m"]}</p>'
        for n in poem.get("notes", [])
    ) or '<p style="font-size:15px;color:#4a3826;margin:4px 0;">（本篇未列注音注释）</p>'

    warn = ""
    if sensitive:
        warn = (f'<div style="background:#fbf0e8;border:1px solid #d8a07a;color:#9e4a2b;'
                f'font-size:14px;padding:10px 14px;margin:10px 0;line-height:1.7;">'
                f'⚠ 文旅宣传建议：本篇《{poem["title"]}》{poem.get("note","文旅文案建议慎选")}</div>')

    next_snip = snippet(next_poem)
    preview = (f'<div style="text-align:center;font-size:14px;color:#6b5638;margin-top:10px;">'
               f'<span style="display:inline-block;font-size:20px;color:#9e2b25;border:2px solid #9e2b25;'
               f'padding:6px 10px;letter-spacing:2px;">邶風</span>'
               f'<div style="margin-top:10px;">《诗经·邶风》十九篇 · 系列连载</div>'
               f'<div style="margin-top:4px;color:#8a6d3b;">下期预告：{next_poem["title"]} ——「{next_snip}」</div>'
               f'</div>')

    return f'''<div style="max-width:680px;margin:0 auto;background:#f7f1e3;padding:30px 22px 40px;font-family:'Songti SC','SimSun',STSong,serif;color:#3a2c20;line-height:1.95;">

  <div style="font-size:13px;color:#8a6d3b;letter-spacing:6px;text-align:center;">詩 經 · 邶 風</div>
  <h1 style="font-size:34px;color:#9e2b25;text-align:center;letter-spacing:8px;font-weight:normal;margin:8px 0 4px;">{poem['title']}</h1>
  <div style="font-size:14px;color:#6b5638;text-align:center;letter-spacing:2px;">{poem['pinyin']}　·　{poem['theme']}</div>
  <div style="text-align:center;margin:14px 0 6px;">
    <span style="display:inline-block;font-size:13px;color:#fff;background:#9e2b25;padding:3px 14px;border-radius:2px;letter-spacing:2px;">{tag}</span>
  </div>

  <div style="text-align:center;color:#c9a25a;letter-spacing:10px;margin:20px 0;">❦　❦　❦</div>

  <div style="font-size:16px;color:#4a3826;text-align:center;">原文 · 竖排（手机长按可保存）</div>
  <img src="{img_name}" alt="邶风{poem['title']}竖排" style="width:100%;display:block;margin:14px auto 8px;border:1px solid #d8c9a8;" />
  <div style="font-size:13px;color:#8a6d3b;text-align:center;">（横屏或双指放大，可见笔意）</div>
{warn}
  <div style="text-align:center;color:#c9a25a;letter-spacing:10px;margin:22px 0 14px;">❦　❦　❦</div>

  <h2 style="font-size:18px;color:#9e2b25;border-left:4px solid #c9a25a;padding-left:10px;margin:20px 0 10px;">译 文</h2>
  <p style="font-size:16px;color:#4a3826;margin:6px 0;text-indent:2em;">{poem['trans']}</p>

  <h2 style="font-size:18px;color:#9e2b25;border-left:4px solid #c9a25a;padding-left:10px;margin:22px 0 10px;">注 释</h2>
  {notes_html}

  <h2 style="font-size:18px;color:#9e2b25;border-left:4px solid #c9a25a;padding-left:10px;margin:22px 0 10px;">赏 析</h2>
  <p style="font-size:16px;color:#4a3826;margin:6px 0;text-indent:2em;">{poem['appreciation']}</p>

  <div style="text-align:center;color:#c9a25a;letter-spacing:10px;margin:24px 0 14px;">❦　❦　❦</div>
{preview}
</div>
'''


def main():
    n = len(POEMS)
    done = 0
    for i, poem in enumerate(POEMS):
        prefix = f"{poem['id']:02d}_{poem['title']}"
        img_name = f"{prefix}_竖排长图.png"
        gen_png(poem, os.path.join(HERE, img_name))
        next_poem = POEMS[(i + 1) % n]
        html = gen_html(poem, img_name, next_poem)
        with open(os.path.join(HERE, f"{prefix}.html"), "w", encoding="utf8") as f:
            f.write(html)
        done += 1
        print(f"[{done:2d}] {prefix}  ->  PNG + HTML")
    print("全部完成，共生成", done, "篇 HTML（含 19 张竖排长图）")


if __name__ == "__main__":
    main()
