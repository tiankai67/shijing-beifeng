// ===== 诗经·邶风 交互逻辑 =====
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const themeColor = (k) => (THEMES.find((t) => t.key === k) || {}).color || "#7a5230";

  /* 文化渊源 */
  $("#c-intro").textContent = CULTURE.intro;
  $("#c-beicheng").textContent = CULTURE.beicheng;
  $("#c-history").textContent = CULTURE.history;
  $("#c-sansheng").textContent = CULTURE.sansheng;
  $("#c-love").textContent = CULTURE.love;
  $("#c-relics").textContent = CULTURE.relics;

  /* 过滤器 */
  const filtersEl = $("#filters");
  let activeTheme = "全部";
  let keyword = "";

  const allOpt = mkChip("全部", true);
  filtersEl.appendChild(allOpt);
  THEMES.forEach((t) => filtersEl.appendChild(mkChip(t.key, false)));

  function mkChip(label, active) {
    const c = document.createElement("div");
    c.className = "chip" + (active ? " active" : "");
    c.textContent = label;
    c.onclick = () => {
      activeTheme = label;
      $$(".chip", filtersEl).forEach((x) => x.classList.remove("active"));
      c.classList.add("active");
      renderPoems();
    };
    return c;
  }

  $("#search").addEventListener("input", (e) => {
    keyword = e.target.value.trim();
    renderPoems();
  });

  /* 诗篇卡片 */
  const listEl = $("#poem-list");

  function poemExcerpt(p) {
    if (p.sensitive) return "（原文从略 · 文旅建议慎选）";
    return p.lines.join("　");
  }

  function renderPoems() {
    const kw = keyword.toLowerCase();
    const items = POEMS.filter((p) => {
      const okTheme = activeTheme === "全部" || p.theme === activeTheme;
      const hay = (p.title + p.lines.join("") + p.trans + p.theme).toLowerCase();
      const okKw = !kw || hay.includes(kw);
      return okTheme && okKw;
    });
    listEl.innerHTML = "";
    if (!items.length) {
      listEl.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--ink-faint);">未找到匹配的诗篇。</p>';
      return;
    }
    items.forEach((p) => {
      const card = document.createElement("div");
      card.className = "poem-card";
      const stars = p.recommend ? "★".repeat(p.recommend) : "";
      card.innerHTML = `
        <div class="idx">邶风 · 其${cn(p.id)}</div>
        <div class="pt">${p.title}</div>
        <div class="ex">${poemExcerpt(p)}</div>
        <div class="meta">
          <span class="theme-tag" style="background:${themeColor(p.theme)}">${p.theme}</span>
          ${p.sensitive ? '<span class="seal mini">慎</span>' : (stars ? `<span class="stars">${stars}</span>` : '<span class="seal mini">邶</span>')}
        </div>`;
      card.onclick = () => openPoem(p.id);
      listEl.appendChild(card);
    });
  }

  function cn(n) {
    const s = ["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];
    return s[n] || n;
  }

  /* 诗篇详情 卷轴 */
  const overlay = $("#overlay");
  const body = $("#scroll-body");

  function openPoem(id) {
    const p = POEMS.find((x) => x.id === id);
    if (!p) return;
    const color = themeColor(p.theme);
    const origLines = p.sensitive
      ? ["（原文从略）"]
      : p.lines;
    const notesHtml = p.notes.length
      ? `<div class="notes-list">${p.notes
          .map((n) => `<div class="note-item"><b>${n.w}</b><span class="p">${n.p}</span>　${n.m}</div>`)
          .join("")}</div>`
      : '<p class="appr">本篇未列详细注释，可查阅《诗经》注本深入学习。</p>';

    const warn = p.sensitive ? `<span class="warn">文旅建议：慎选 · ${p.note || ""}</span>` : "";

    body.innerHTML = `
      <div class="detail-head">
        <span class="no">邶风 · 其${cn(p.id)}</span>
        <h2>${p.title}</h2>
        <span class="py">${p.pinyin || ""}</span>
      </div>
      <div class="detail-tags">
        <span class="theme-tag" style="background:${color}">${p.theme}</span>
        ${warn}
      </div>
      <div class="poem-split">
        <div class="orig">${origLines.map((l) => `<div class="ln">${l}</div>`).join("")}</div>
        <div class="trans">
          <span class="tlabel">【译文】</span>${p.trans}
        </div>
      </div>
      <div class="block">
        <h4><span class="bar"></span>注释</h4>
        ${notesHtml}
      </div>
      <div class="block">
        <h4><span class="bar"></span>赏析</h4>
        <p class="appr">${p.appreciation}</p>
      </div>
      <div class="block">
        <h4><span class="bar"></span>适用场景</h4>
        <p class="scene">${p.scene}</p>
      </div>`;
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closePoem() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
  $("#close-x").onclick = closePoem;
  overlay.onclick = (e) => { if (e.target === overlay) closePoem(); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePoem(); });

  /* 五大主题 */
  const themeList = $("#theme-list");
  const themeIcons = { "爱情之美": "愛", "亲情之厚": "孝", "乡愁之深": "思", "品格之坚": "志", "自然之韵": "風", "讽喻怨刺": "刺" };
  THEMES.forEach((t) => {
    const cnt = POEMS.filter((p) => p.theme === t.key).length;
    const el = document.createElement("div");
    el.className = "theme-card";
    el.innerHTML = `
      <div class="ic" style="background:${t.color}">${themeIcons[t.key] || "·"}</div>
      <h4>${t.key}</h4>
      <p>${t.desc}</p>
      <div class="cnt">共 ${cnt} 篇</div>`;
    themeList.appendChild(el);
  });

  /* 文旅推荐 */
  const hlList = $("#hl-list");
  HIGHLIGHTS.forEach((h) => {
    const el = document.createElement("div");
    el.className = "hl-card";
    el.innerHTML = `
      <div class="verse">${h.text}</div>
      <div class="from">${h.from}</div>
      <div class="why">${h.why}</div>
      <div class="star">${"★".repeat(h.star)}</div>`;
    hlList.appendChild(el);
  });

  /* 研学互动：填句 */
  const quizQ = $("#quiz-q");
  const quizOpts = $("#quiz-opts");
  const quizFb = $("#quiz-fb");
  const quizScore = $("#quiz-score");
  const quizNext = $("#quiz-next");

  // 构造题库：把每句以“，”切分
  const pool = [];
  POEMS.filter((p) => !p.sensitive).forEach((p) => {
    p.lines.forEach((ln) => {
      const i = ln.indexOf("，");
      if (i > 0 && i < ln.length - 1) {
        pool.push({ title: p.title, a: ln.slice(0, i), b: ln.slice(i + 1) });
      }
    });
  });

  let cur = null, answered = false, score = 0, total = 0;

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function nextQuiz() {
    if (!pool.length) { quizQ.textContent = "题库已用完，感谢研习！"; quizOpts.innerHTML = ""; quizNext.style.display = "none"; return; }
    answered = false;
    quizFb.textContent = "";
    quizFb.className = "quiz-fb";
    const q = pool[Math.floor(Math.random() * pool.length)];
    cur = q;
    quizQ.innerHTML = `《${q.title}》　“${q.a}，<span class="blank">＿＿＿</span>”`;

    const distract = shuffle(pool.filter((x) => x.b !== q.b).map((x) => x.b)).slice(0, 3);
    const opts = shuffle([q.b, ...distract]);
    quizOpts.innerHTML = "";
    opts.forEach((o) => {
      const b = document.createElement("div");
      b.className = "quiz-opt";
      b.textContent = o;
      b.onclick = () => choose(b, o, q.b);
      quizOpts.appendChild(b);
    });
  }

  function choose(el, val, ans) {
    if (answered) return;
    answered = true;
    total++;
    $$(".quiz-opt", quizOpts).forEach((x) => (x.onclick = null));
    if (val === ans) {
      el.classList.add("right");
      score++;
      quizFb.textContent = "✓ 正是此句，诗心相通。";
      quizFb.className = "quiz-fb ok";
    } else {
      el.classList.add("wrong");
      $$(".quiz-opt", quizOpts).forEach((x) => { if (x.textContent === ans) x.classList.add("right"); });
      quizFb.textContent = "✗ 正确答案：" + ans;
      quizFb.className = "quiz-fb no";
    }
    quizScore.textContent = `已答 ${total} 题　答对 ${score} 题　正确率 ${Math.round((score / total) * 100)}%`;
  }

  quizNext.onclick = nextQuiz;

  /* 滚动揭示 */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* 初始化 */
  renderPoems();
  nextQuiz();
})();
