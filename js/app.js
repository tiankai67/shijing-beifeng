// ===== 诗经·邶风 交互逻辑（含 全文/名句切换 · 朗读 · 中英切换）=====
(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const themeColor = (k) => (THEMES.find((t) => t.key === k) || {}).color || "#7a5230";
  const themeName = (k) => {
    const t = THEMES.find((x) => x.key === k);
    if (!t) return k;
    return (LANG === "en" && t.nameEn) ? t.nameEn : t.key;
  };

  let LANG = "zh";
  const T = (k) => (I18N[LANG] && I18N[LANG][k] != null) ? I18N[LANG][k] : (I18N.zh[k] != null ? I18N.zh[k] : k);
  // 取诗篇字段：英文模式优先 en 对象
  const pf = (p, zhKey, enKey) => {
    if (LANG === "en" && p.en && p.en[enKey] != null) return p.en[enKey];
    return p[zhKey];
  };
  const cn = (n) => {
    const s = ["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];
    return s[n] || n;
  };

  /* ---------- 文化渊源 ---------- */
  function renderCulture() {
    const C = LANG === "en" ? CULTURE.en : CULTURE;
    $("#c-intro").textContent = C.intro;
    $("#c-beicheng").textContent = C.beicheng;
    $("#c-history").textContent = C.history;
    $("#c-sansheng").textContent = C.sansheng;
    $("#c-love").textContent = C.love;
    $("#c-relics").textContent = C.relics;
  }

  /* ---------- 过滤器 ---------- */
  const filtersEl = $("#filters");
  let activeTheme = "全部";
  let keyword = "";

  function buildFilters() {
    filtersEl.innerHTML = "";
    const allOpt = mkChip(T("all"), true);
    filtersEl.appendChild(allOpt);
    THEMES.forEach((t) => filtersEl.appendChild(mkChip(themeName(t.key), false)));
  }
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

  /* ---------- 诗篇卡片 ---------- */
  const listEl = $("#poem-list");

  function poemExcerpt(p) {
    const arr = pf(p, "lines", "lines");
    return arr.join("　");
  }

  function renderPoems() {
    const kw = keyword.toLowerCase();
    const items = POEMS.filter((p) => {
      const okTheme = activeTheme === "全部" || p.theme === activeTheme;
      const hay = (p.title + pf(p, "lines", "lines").join("") + pf(p, "trans", "trans") + p.theme).toLowerCase();
      const okKw = !kw || hay.includes(kw);
      return okTheme && okKw;
    });
    listEl.innerHTML = "";
    if (!items.length) {
      listEl.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--ink-faint);">${T("no_match")}</p>`;
      return;
    }
    items.forEach((p) => {
      const card = document.createElement("div");
      card.className = "poem-card";
      const stars = p.recommend ? "★".repeat(p.recommend) : "";
      card.innerHTML = `
        <div class="idx">${T("its")}${cn(p.id)}</div>
        <div class="pt">${p.title}</div>
        <div class="ex">${poemExcerpt(p)}</div>
        <div class="meta">
          <span class="theme-tag" style="background:${themeColor(p.theme)}">${themeName(p.theme)}</span>
          ${p.sensitive ? '<span class="seal mini">慎</span>' : (stars ? `<span class="stars">${stars}</span>` : '<span class="seal mini">邶</span>')}
        </div>`;
      card.onclick = () => openPoem(p.id);
      listEl.appendChild(card);
    });
  }

  /* ---------- 诗篇详情 卷轴 ---------- */
  const overlay = $("#overlay");
  const body = $("#scroll-body");
  let curPoem = null;

  function openPoem(id) {
    const p = POEMS.find((x) => x.id === id);
    if (!p) return;
    curPoem = p;
    renderDetail();
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function renderDetail() {
    const p = curPoem;
    if (!p) return;
    const color = themeColor(p.theme);
    const lines = pf(p, "lines", "lines");
    const full = pf(p, "full", "full");
    const trans = pf(p, "trans", "trans");
    const appr = pf(p, "appreciation", "appreciation");
    const notes = LANG === "en" ? p.en.notes : p.notes;

    const notesHtml = notes.length
      ? `<div class="notes-list">${notes.map((n) => `<div class="note-item"><b>${n.w}</b><span class="p">${n.p}</span>　${n.m}</div>`).join("")}</div>`
      : `<p class="appr">${T("label_notes")}…</p>`;

    const warn = p.sensitive ? `<span class="warn">${T("warn_prefix")}${p.note || ""}</span>` : "";
    // 适用场景：仅非敏感篇展示
    const sceneHtml = (!p.sensitive && p.scene)
      ? `<div class="block"><h4><span class="bar"></span>${T("label_scene")}</h4><p class="scene">${p.scene}</p></div>`
      : "";

    body.innerHTML = `
      <div class="detail-head">
        <span class="no">${T("its")}${cn(p.id)}</span>
        <h2>${p.title}</h2>
        <span class="py">${p.pinyin || ""}</span>
      </div>
      <div class="detail-tags">
        <span class="theme-tag" style="background:${color}">${themeName(p.theme)}</span>
        ${warn}
      </div>

      <div class="detail-tools">
        <div class="seg" id="view-seg">
          <button data-view="lines" class="active">${T("label_lines")}</button>
          <button data-view="full">${T("label_full")}</button>
        </div>
        <div class="speak-btns">
          <button id="spk-lines" class="speak-btn">🔊 ${T("read_lines")}</button>
          <button id="spk-full" class="speak-btn">🔊 ${T("read_full")}</button>
          <button id="spk-stop" class="speak-btn stop">⏹ ${T("read_stop")}</button>
        </div>
      </div>

      <div class="poem-split">
        <div class="orig" id="orig-box"></div>
        <div class="trans"><span class="tlabel">${T("label_trans")}</span>${trans}</div>
      </div>

      <div class="block">
        <h4><span class="bar"></span>${T("label_notes")}</h4>
        ${notesHtml}
        <div id="fullnotes-box"></div>
      </div>
      <div class="block">
        <h4><span class="bar"></span>${T("label_appr")}</h4>
        <p class="appr">${appr}</p>
      </div>
      ${sceneHtml}`;

    // 默认显示名句
    showView("lines");

    // 视图切换
    $$("#view-seg button").forEach((b) => {
      b.onclick = () => {
        $$("#view-seg button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        showView(b.getAttribute("data-view"));
      };
    });

    // 朗读
    $("#spk-lines").onclick = () => playPoem(p, "lines");
    $("#spk-full").onclick = () => playPoem(p, "full");
    $("#spk-stop").onclick = stopSpeak;
  }

  const CHAP = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  function chapName(i) { return "其" + (CHAP[i] || String(i + 1)); }
  function fullNotesHtml(p) {
    const fn = p.fullNotes || [];
    if (!fn.length) return "";
    return `<div class="fullnotes"><div class="fn-title">${T("label_fullnotes")}</div>` +
      fn.map((t, i) => `<div class="fn-item"><span class="fn-chap">${chapName(i)}</span><span class="fn-text">${t}</span></div>`).join("") +
      `</div>`;
  }
  function showView(mode) {
    const p = curPoem;
    const box = $("#orig-box");
    if (!box || !p) return;
    box.className = "orig " + (mode === "full" ? "mode-full" : "mode-lines");
    if (mode === "full") {
      box.innerHTML = p.full.map((c, i) => `<div class="chap">${chapName(i)}</div><div class="ln">${c}</div>`).join("");
    } else {
      box.innerHTML = p.lines.map((l) => `<div class="ln">${l}</div>`).join("");
    }
    const fb = $("#fullnotes-box");
    if (fb) fb.innerHTML = mode === "full" ? fullNotesHtml(p) : "";
  }

  function closePoem() {
    stopSpeak();
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
  $("#close-x").onclick = closePoem;
  overlay.onclick = (e) => { if (e.target === overlay) closePoem(); };
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePoem(); });

  /* ---------- 柔美女声朗读（Web Speech API） ---------- */
  const synth = window.speechSynthesis;
  let voices = [];
  function loadVoices() { if (synth) voices = synth.getVoices() || []; }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
  function pickZhVoice() {
    if (!voices.length) loadVoices();
    const zh = voices.filter((v) => /zh|cmn|chinese|中文|普通话/i.test(v.lang + " " + v.name));
    const female = zh.filter((v) => /female|女|xiao|ya|hui|ting|mei|yun|shan/i.test(v.name));
    return female[0] || zh[0] || null;
  }
  function speak(text) {
    if (!synth) { alert("当前浏览器不支持语音朗读"); return; }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickZhVoice();
    if (v) { u.voice = v; u.lang = v.lang || "zh-CN"; }
    else u.lang = "zh-CN";
    u.pitch = 1.35;   // 柔美
    u.rate = 0.82;
    synth.speak(u);
  }
  function stopSpeak() {
    if (synth) synth.cancel();
    if (curAudio) { try { curAudio.pause(); } catch (e) {} curAudio = null; }
  }

  // 朗读：优先播放预生成的真人级音频（Edge TTS 女声），失败降级到系统语音
  let curAudio = null;
  function playPoem(p, mode) {
    const url = "audio/p" + p.id + "_" + mode + ".mp3";
    const text = (mode === "full" ? p.full : p.lines).join("。");
    if (curAudio) { try { curAudio.pause(); } catch (e) {} curAudio = null; }
    const a = new Audio(url);
    curAudio = a;
    a.onerror = function () { fallbackSpeak(text); };
    const pr = a.play();
    if (pr && pr.catch) pr.catch(function () { fallbackSpeak(text); });
  }
  function fallbackSpeak(text) { speak(text); }

  /* ---------- 五大主题 ---------- */
  const themeList = $("#theme-list");
  const themeIcons = { "爱情之美": "愛", "亲情之厚": "孝", "乡愁之深": "思", "品格之坚": "志", "自然之韵": "風", "讽喻怨刺": "刺" };
  function renderThemes() {
    themeList.innerHTML = "";
    THEMES.forEach((t) => {
      const cnt = POEMS.filter((p) => p.theme === t.key).length;
      const el = document.createElement("div");
      el.className = "theme-card";
      el.innerHTML = `
        <div class="ic" style="background:${t.color}">${themeIcons[t.key] || "·"}</div>
        <h4>${themeName(t.key)}</h4>
        <p>${LANG === "en" ? t.descEn : t.desc}</p>
        <div class="cnt">${T("theme_cnt").replace("X", cnt)}</div>`;
      themeList.appendChild(el);
    });
  }

  /* ---------- 文旅推荐 ---------- */
  const hlList = $("#hl-list");
  function renderHighlights() {
    hlList.innerHTML = "";
    HIGHLIGHTS.forEach((h) => {
      const el = document.createElement("div");
      el.className = "hl-card";
      el.innerHTML = `
        <div class="verse">${h.text}</div>
        <div class="from">${LANG === "en" ? h.fromEn : h.from}</div>
        <div class="why">${LANG === "en" ? h.whyEn : h.why}</div>
        <div class="star">${"★".repeat(h.star)}</div>`;
      hlList.appendChild(el);
    });
  }

  /* ---------- 研学互动：填句 ---------- */
  const quizQ = $("#quiz-q");
  const quizOpts = $("#quiz-opts");
  const quizFb = $("#quiz-fb");
  const quizScore = $("#quiz-score");
  const quizNext = $("#quiz-next");
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
    if (!pool.length) { quizQ.textContent = T("quiz_done"); quizOpts.innerHTML = ""; quizNext.style.display = "none"; return; }
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
      quizFb.textContent = T("fb_ok");
      quizFb.className = "quiz-fb ok";
    } else {
      el.classList.add("wrong");
      $$(".quiz-opt", quizOpts).forEach((x) => { if (x.textContent === ans) x.classList.add("right"); });
      quizFb.textContent = T("fb_no") + ans;
      quizFb.className = "quiz-fb no";
    }
    quizScore.textContent = `已答 ${total} 题　答对 ${score} 题　正确率 ${Math.round((score / total) * 100)}%`;
  }
  quizNext.onclick = nextQuiz;

  /* ---------- 静态文案 i18n ---------- */
  function setStaticI18n() {
    $$("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      el.textContent = T(k);
    });
    // 搜索框占位
    const sb = $("#search");
    if (sb) sb.placeholder = T("search_ph");
    // 语言按钮状态
    $$(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === LANG);
    });
  }

  /* ---------- 全站语言切换 ---------- */
  function setLang(lang) {
    LANG = lang;
    setStaticI18n();
    renderCulture();
    buildFilters();
    renderPoems();
    renderThemes();
    renderHighlights();
    if (curPoem) renderDetail();
    try { localStorage.setItem("beifeng_lang", LANG); } catch (e) {}
  }
  $$(".lang-btn").forEach((b) => {
    b.onclick = () => setLang(b.getAttribute("data-lang"));
  });

  /* ---------- 滚动揭示 ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- 初始化 ---------- */
  let saved = "zh";
  try { saved = localStorage.getItem("beifeng_lang") || "zh"; } catch (e) {}
  setLang(saved);
  nextQuiz();
})();
