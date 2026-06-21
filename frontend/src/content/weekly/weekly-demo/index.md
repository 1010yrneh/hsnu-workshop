---
title: 週刊 #1 — 本週前端動態
description: 第一期週刊，包含 Astro 6.x 更新、Tailwind CSS v4 實作、Bun 生態進展等前端技術動態。
date: 2024-06-02
tags: [前端, Astro, CSS]
issue: 1
cover: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200
---

## 本週推薦

### Astro 6.x 正式發布

Astro 6 帶來了全新的內容層 API 和更快的建構速度。

- 新的 `content.config.ts` 取代 `content/config.ts`
- `unified()` 處理器統一 Markdown/MDX 外掛設定
- 建構速度提升約 30%

### Tailwind CSS v4

Tailwind CSS v4 採用 CSS-first 設定方式，不需要 `tailwind.config.js`：

```css
@import 'tailwindcss';

@theme {
  --color-primary: #e9536a;
}
```

### Bun 1.3

Bun 1.3 改善了套件管理器的穩定性和相容性：

- 更快的 `bun install`
- 改善的 Node.js 相容層
- 新增 `bun build` 最佳化

## 工具推薦

| 工具 | 用途 |
|------|------|
| 自訂後端 | 留言與互動資料 |
| [KaTeX](https://katex.org) | Web 數學公式渲染 |
| [Shiki](https://shiki.style) | 程式碼語法醒目標示 |

## 程式碼片段

### React 自訂 Hook

```typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
```

### CSS Grid 響應式版面

```css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

## 精選文章

- [Content Collections in Astro 6](https://docs.astro.build/en/guides/content-collections/)
- [MDX Guide](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)

## 下期預告

下期將介紹 TypeScript 5.5 新功能和 React 19 更新。敬請期待！
