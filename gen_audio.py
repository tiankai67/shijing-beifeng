# 用 Edge TTS（微软 XiaoxiaoNeural 中文女声）批量生成朗读音频
# 输出：audio/p{id}_lines.mp3（名句）  audio/p{id}_full.mp3（全文）
import asyncio
import edge_tts
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_data  # 仅取 POEMS，不触发 build()

VOICE = "zh-CN-XiaoxiaoNeural"   # 温柔自然的中文女声
RATE = "+0%"                      # 语速正常
PITCH = "+0Hz"
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "audio")
os.makedirs(OUT, exist_ok=True)


async def tts(text, path):
    text = (text or "").strip()
    if not text:
        return
    # 章/句间用句号制造自然停顿
    comm = edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH)
    await comm.save(path)


async def main():
    total = 0
    for p in gen_data.POEMS:
        pid = p["id"]
        # 名句
        lines_text = "。".join(p.get("lines", []))
        lpath = os.path.join(OUT, f"p{pid}_lines.mp3")
        await tts(lines_text, lpath)
        # 全文
        full_text = "。".join(p.get("full", []))
        fpath = os.path.join(OUT, f"p{pid}_full.mp3")
        await tts(full_text, fpath)
        total += 2
        print(f"  p{pid} {p['title']}: lines+full OK")
    print(f"完成：共生成 {total} 个音频 -> {OUT}")


if __name__ == "__main__":
    asyncio.run(main())
