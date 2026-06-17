---
title: 歡迎使用 Sify Blog
description: Sify Blog 基於 Astro 建構，是現代化部落格主題，支援 Markdown/MDX、數學公式、程式碼醒目標示、搜尋、留言等豐富功能。
date: 2024-06-01
tags: [Astro, 教學]
category: 筆記
pinned: true
cover: https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200
---

## 快速開始

Sify Blog 是功能完整的 Astro 部落格主題。本文介紹各項功能的快速用法。

[Astro 文件](https://astro.build)

### 安裝執行

```bash
bun install
bun dev
```

開啟 `http://localhost:4321` 即可預覽。

### 設定站台資訊

編輯 `src/consts.ts` 修改站台標題、描述、頭像、社群連結等基本資訊：

```typescript
export const SITE_TITLE = 'Sify Blog';
export const SITE_DESCRIPTION = '一個基於 Astro 的現代化部落格主題';
export const SITE_AUTHOR = 'santisify';
```

## 功能一覽

| 功能 | 說明 |
|------|------|
| Markdown / MDX | 支援標準 Markdown 和 JSX 元件 |
| 數學公式 | KaTeX 渲染行內和區塊公式 |
| 程式碼醒目標示 | Shiki 主題，複製按鈕 |
| 深色模式 | 依照系統 + 手動切換 |
| 全站搜尋 | 標題 + 正文匹配，醒目標示結果 |
| 留言系統 | Waline 留言區 |
| RSS | 自動產生 RSS Feed |
| 友站 | 好友連結 + 友站圈動態 |
| 文章封面 | 本機圖片 / 遠端 URL |
| 響應式 | 支援行動裝置 |

## 頁面路由

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁（文章列表 + Hero） |
| `/post/[...slug]` | 文章詳情頁 |
| `/categories/[category]` | 分類頁面 |
| `/tags/[tag]` | 標籤頁面 |
| `/archives` | 文章封存 |
| `/weekly` | 週刊 |
| `/friends` | 友站頁面 |
| `/about` | 關於頁面 |
| `/rss.xml` | RSS 訂閱 |

> 💡 使用 `Ctrl + K` 快捷鍵隨時叫出搜尋面板。
