// 从 js/data.js 导出纯数据 JSON，供 Python 批量生成公众号图文素材
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "..", "js", "data.js"), "utf8");
// data.js 仅含 const 声明（字面量，无模板字符串/外部依赖），可直接执行取值
const mod = new Function(src + "\nreturn { THEMES, POEMS, HIGHLIGHTS, CULTURE };");
const data = mod();

const out = path.join(__dirname, "poems.json");
fs.writeFileSync(out, JSON.stringify(data, null, 2), "utf8");
console.log("exported", data.POEMS.length, "poems ->", out);
