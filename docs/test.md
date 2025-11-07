# Test Page

:::tip 小撇步
把每個章節當成「一張投影片」來寫，學生更容易吸收。
:::

**待辦清單（GFM）**

- [x] 安裝 Docusaurus
- [ ] 加上 KaTeX
- [ ] 匯入舊文章

**表格（GFM）**

| 章節 | 內容     | 估讀時間 |
| ---- | -------- | -------- |
| 1    | 基礎語法 | 10 分    |
| 2    | 函式     | 20 分    |

**行內數學（LaTeX）**：$f(x)=x^2$。

**方程式（LaTeX）**：
$$
\int_{0}^{1} x^n\,dx = \frac{1}{n+1}
$$
**程式碼（含行高亮）**

```ts title="two-sum.ts" showLineNumbers
export function twoSum(
  nums: number[],
  target: number
): [number, number] | null {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need)!, i];
    seen.set(nums[i], i);
  }
  return null;
}

```

---

## 5. 常見調整

### 5.1 語系與站點基本資訊

```js
// docusaurus.config.mjs（片段）
export default {
  title: '我的課程 Webbook',
  tagline: '清楚、友善、可維護',
  url: 'https://your-domain.com',
  baseUrl: '/',
  i18n: {
  defaultLocale: 'zh-Hant',
  locales: ['zh-Hant'],
  },
};
