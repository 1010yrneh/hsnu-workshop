# Sify Blog

基於 Astro 6 + Tailwind CSS v4 的現代化部落格主題，支援亮色/深色模式、MDX、數學公式、全站搜尋、留言系統。

![Astro](https://img.shields.io/badge/Astro-6.x-BC52EE?logo=astro)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-blue)

## 功能

- **Markdown / MDX** — 支援標準 Markdown 和 JSX 內嵌元件
- **KaTeX 數學公式** — 行內與區塊 LaTeX 數學公式渲染
- **程式碼醒目標示** — Shiki 語法醒目標示 + 單鍵複製按鈕
- **深色模式** — 依照系統偏好 + 手動切換，`localStorage` 持久化
- **全站搜尋** — `Ctrl+K` 叫出，匹配標題/正文，醒目標示結果
- **Waline 留言** — 開箱即用的留言系統
- **友站頁面** — 好友連結 + 友站圈文章動態
- **文章封面** — 支援遠端 URL 和本機圖片
- **RSS 訂閱** — 自動產生 `/rss.xml`
- **響應式設計** — 桌面雙欄 + 行動裝置抽屜式側邊欄
- **SEO 最佳化** — Open Graph、Twitter Card、Canonical URL
- **側邊欄** — 個人資訊、分類/標籤雲、隨機推薦

## 技術棧

| 技術 | 用途 |
|------|------|
| [Astro 6](https://astro.build) | 靜態站台生成 |
| [Tailwind CSS v4](https://tailwindcss.com) | CSS 框架 |
| [Shiki](https://shiki.style) | 程式碼語法醒目標示 |
| [KaTeX](https://katex.org) | 數學公式渲染 |
| [MDX](https://mdxjs.com) | Markdown + JSX |
| [Waline](https://waline.js.org) | 留言系統 |

## 快速開始

### 環境需求

- [Bun](https://bun.sh)（推薦）或 Node.js 18+

### 安裝

```bash
git clone <your-repo-url> my-blog
cd my-blog
bun install
```

### 本機開發

```bash
bun dev
```

開啟 <http://localhost:4321>，支援熱重載。

### 建構

```bash
bun run build
```

輸出在 `dist/` 目錄。

### 預覽正式建構

```bash
bun preview
```

## 設定

編輯 `src/consts.ts`：

```typescript
export const SITE_TITLE = 'Sify Blog';
export const SITE_DESCRIPTION = '一個基於 Astro 的現代化部落格主題';
export const SITE_AUTHOR = 'santisify';
export const SITE_URL = 'https://example.com';
export const SITE_AVATAR = '/favicon.svg';
export const SITE_COVER = '/images/cover.jpg';

export const PAGE_SIZE = 10;

export const NAV_ITEMS = [
  { label: '首頁', href: '/' },
  { label: '週刊', href: '/weekly' },
  { label: '文章', href: '/archives' },
  { label: '友站', href: '/friends' },
  { label: '關於', href: '/about' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/yourname', icon: 'github' },
  { name: 'RSS', href: '/rss.xml', icon: 'rss' },
];
```

### 自訂主題色

編輯 `src/styles/global.css`：

```css
@theme {
  --color-primary: #e9536a;
  --color-bg-light: #f5f5f5;
  --color-bg-dark: #1a1a2e;
  --color-card-light: #ffffff;
  --color-card-dark: #1e2a45;
}
```

### 自訂字體

```css
--font-family-sans: 'Inter', 'Noto Sans TC', sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

## 撰寫文章

在 `src/content/blog/` 下建立 `.md` 或 `.mdx` 檔案。

### Frontmatter

```yaml
---
title: 文章標題
description: 文章描述
date: 2024-06-01
updated: 2024-06-15     # 可選，更新日期
tags: [標籤1, 標籤2]
category: 分類
cover: ./images/cover.webp  # 遠端 URL 或本機相對路徑
pinned: false              # 是否置頂
draft: false               # 草稿不進 RSS
---
```

### 目錄結構

支援兩種方式：

```
src/content/blog/
├── my-post.md              # 單檔（slug: my-post）
└── another-post/
    ├── index.md             # 目錄形式（slug: another-post）
    └── cover.webp           # 本機圖片
```

### 週刊

在 `src/content/weekly/` 下建立文章，額外需要 `issue` 欄位：

```yaml
---
title: 週刊 #1
date: 2024-06-02
tags: [前端]
issue: 1
cover: https://example.com/cover.jpg
---
```

## MDX 與元件

在 MDX 檔案中可以 import 並使用自訂 Astro 元件：

```mdx
---
title: MDX 範例
date: 2024-06-01
---

import LinkCard from '../../../components/LinkCard.astro';

<LinkCard
  url="https://astro.build"
  title="Astro 官方文件"
  description="適合內容型網站的全能 web 框架"
/>
```

內建元件：

- `LinkCard` — 外部連結卡片（`src/components/LinkCard.astro`）

建立新元件：

1. 在 `src/components/` 下建立 `.astro` 檔案
2. 在 MDX 檔案中 import 使用

## 數學公式

KaTeX 已預先設定。在 Markdown 中直接使用 `$...$` 或 `$$...$$`：

```markdown
行內公式：$E = mc^2$

區塊公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 留言系統

設定 Waline 留言伺服器：

編輯 `src/components/waline/Comment.astro`，修改 `serverURL`：

```typescript
walineInit({
  el: '#waline',
  serverURL: 'https://your-waline-server.com',
  lang: 'zh-TW',
  // ...
});
```

## 友站

編輯 `public/links.json` 新增好友連結：

```json
{
  "friends": [
    {
      "id_name": "cf-links",
      "desc": "好友連結",
      "link_list": [
        {
          "name": "Friend's Blog",
          "link": "https://friend.example.com",
          "avatar": "https://friend.example.com/avatar.jpg",
          "intro": "個人簡介"
        }
      ]
    }
  ]
}
```

## 部署

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

單鍵部署，不需要額外設定。

### Cloudflare Pages

| 設定項 | 值 |
|--------|-----|
| 建構指令 | `bun run build` |
| 輸出目錄 | `dist` |

### 其他靜態託管

建構後直接將 `dist/` 目錄內容上傳到任意靜態檔案伺服器。

### 部署前檢查

```bash
# 建構
bun run build

# 預覽（可選）
bun preview
```

確認以下檔案存在：

- `dist/index.html`
- `dist/rss.xml`
- `dist/search-index.json`
- `dist/favicon.svg`

## 目錄結構

```
astro-theme-sify/
├── src/
│   ├── components/       # Astro 元件
│   │   └── waline/       # Waline 留言元件
│   ├── content/
│   │   ├── blog/         # 部落格文章
│   │   └── weekly/       # 週刊文章
│   ├── layouts/          # 版面配置元件
│   ├── pages/            # 路由頁面
│   └── styles/           # 全域樣式
├── public/               # 靜態資源
│   └── links.json        # 友站資料
├── astro.config.ts       # Astro 設定
├── src/consts.ts         # 站台設定
├── src/content.config.ts # 內容集合 Schema
└── package.json
```

## License

MIT
