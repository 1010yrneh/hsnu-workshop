---
title: 從零開始架設部落格
description: 詳細介紹如何基於本主題從零開始架設個人部落格，包括安裝、設定、部署全流程。
date: 2024-05-10
tags: [教學, 入門]
category: 教學
cover: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200
---

## 環境準備

請確認已安裝 [Bun](https://bun.sh)（推薦）或 Node.js 18+。

```bash
# 安裝 Bun
curl -fsSL https://bun.sh/install | bash
```

## 建立專案

```bash
# 複製或初始化專案
git clone <your-repo-url> my-blog
cd my-blog
bun install
```

### 本機開發

```bash
bun dev
```

用瀏覽器開啟 `http://localhost:4321`，支援熱重載。

### 建構正式版本

```bash
bun run build
```

### 預覽正式建構

```bash
bun preview
```

## 設定站台

編輯 `src/consts.ts` 檔案，修改以下設定：

```typescript
// 站台基本資訊
export const SITE_TITLE = 'My Blog';
export const SITE_DESCRIPTION = '這是我的個人部落格';
export const SITE_AUTHOR = 'Your Name';
export const SITE_URL = 'https://example.com';
export const SITE_AVATAR = '/avatar.png';
export const SITE_COVER = '/cover.jpg';

// 每頁文章數
export const PAGE_SIZE = 10;

// 導覽選單
export const NAV_ITEMS = [
  { label: '首頁', href: '/' },
  { label: '週刊', href: '/weekly' },
  { label: '文章', href: '/archives' },
  { label: '友站', href: '/friends' },
  { label: '關於', href: '/about' },
];

// 社群連結
export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/yourname', icon: 'github' },
  { name: 'RSS', href: '/rss.xml', icon: 'rss' },
];
```

## 撰寫文章

在 `src/content/blog/` 目錄下建立 `.md` 或 `.mdx` 檔案。

### 文章 Frontmatter

```yaml
---
title: 文章標題
description: 文章描述
date: 2024-06-01
tags: [標籤1, 標籤2]
category: 分類
cover: https://example.com/cover.jpg  # 或 ./images/cover.webp
pinned: false   # 是否置頂
draft: false    # 是否為草稿
---
```

### 文章存放方式

支援兩種目錄結構：

```
src/content/blog/
├── post-slug.md              # 單檔
└── post-slug/
    ├── index.md              # 目錄形式
    └── cover.webp            # 本機圖片
```

## 部署

### Vercel

```bash
# 單鍵部署
vercel
```

### Cloudflare Pages

- 建構指令：`bun run build`
- 輸出目錄：`dist`

### 其他平台

任何支援靜態檔案託管的平台都可以直接部署 `dist/` 目錄。

## 自訂主題

編輯 `src/styles/global.css` 中的 CSS 變數來自訂配色：

```css
@theme {
  --color-primary: #e9536a;       /* 主色調 */
  --color-bg-light: #f5f5f5;      /* 淺色背景 */
  --color-bg-dark: #1a1a2e;       /* 深色背景 */
  --color-card-light: #ffffff;    /* 淺色卡片 */
  --color-card-dark: #1e2a45;     /* 深色卡片 */
}
```

修改站台字體：

```css
--font-family-sans: 'Inter', 'Noto Sans TC', sans-serif;
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```
