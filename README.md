# 網站

此網站以 [Docusaurus](https://docusaurus.io/) 建立，是一個現代化的靜態網站生成器。

## 安裝

下載 [Nodejs](https://nodejs.org/en/download)，並確認已啟用 corepack 的 `pnpm`。

```bash
pnpm install
```

## 本地開發

此指令會啟動本地開發伺服器並自動開啟瀏覽器，修改內容後通常可即時反映，無需重新啟動。

```bash
pnpm start
```

## 建置

```bash
pnpm build
```

此指令會將靜態內容輸出到 build 目錄，可配合任意靜態網站服務部署。

本專案有使用 GitHub Pages，此指令會自動完成建置並推送到 gh-pages 分支。

## 專案規則

1. 在 git push 之前，請務必先執行 pnpm build，確認網站可正常建置。
2. 修改 docusaurus.config 後，建議重新啟動一次開發伺服器以確保設定生效。
3. 新增頁面或文件後，若 sidebars 未正確顯示，請確認是否有被加入對應分類或路徑。

Blog 提供了簡單的小工具：

```bash
pnpm blog #建立一篇新的 Blog
pnpm blog <標題> #建立一篇新的 Blog，並初始化標題
```

如果有打算發布，請記得把 `draft: true` 刪除。當然，也可以自行建立 category 將文章放置到 `blog/<categories>/*.md`。
