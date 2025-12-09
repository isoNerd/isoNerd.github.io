import fs from "fs";
import path from "path";

//
// 設定路徑，可依專案結構調整
//
console.log(__dirname);

const TEMPLATE_PATH = path.resolve(__dirname, "..", "template/blog.md");
const OUTPUT_DIR = path.resolve(__dirname, "..", "blog");

// 預設檔名：${YYYYMMDD}T${hhmmsszzz}, Ex. 20251209T053507781
const fileName = `${new Date().toJSON().replace(/[^\dT]/g, "")}.md`;
const title = process.argv.slice(2).join(" ") || "未命名文章";
const outputFile = path.join(OUTPUT_DIR, fileName);

//
// 若提供 CLI 標題，注入模板
// pnpm blog "我的新文章"
//
const inputTitle = process.argv.slice(2).join(" ") || "未命名文章";
const [createDate] = new Date().toJSON().split('.');
const outputFilePath = path.join(OUTPUT_DIR, fileName);

//
// 讀取模板
//
if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`找不到模板檔案：${TEMPLATE_PATH}`);
  process.exit(1);
}

let content = fs.readFileSync(TEMPLATE_PATH, "utf-8");

//
// 若模板內存在 placeholder 自動替換
//
content = content
  .replace(/<title>/g, inputTitle)
  .replace(/<date>/g, createDate);

//
// 若 blog 目錄不存在建立
//
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

//
// 寫入新檔案
//
fs.writeFileSync(outputFilePath, content);

console.log("✔ Blog 已建立");
console.log("路徑:", outputFilePath);
console.log("標題:", inputTitle);
