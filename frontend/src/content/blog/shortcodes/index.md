---
title: 主題元件與快捷功能
description: 介紹本主題內建的各種快捷功能和 UI 元件，包括主題切換、側邊欄、分頁、目錄導覽等。
date: 2024-05-05
tags: [Astro, 客製化]
category: 工具
cover: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200
---

## 主題切換

點選 Header 右側的 🌙 / ☀️ 按鈕切換深色/亮色模式。

- 自動依照系統偏好設定
- 手動選擇會儲存到 `localStorage`
- 所有元件都支援兩種模式

### 實作原理

```typescript
// 使用 .dark class 控制
:root {
  --color-bg: #f5f5f5;
  --color-text: #2c3e50;
}

:root.dark {
  --color-bg: #1a1a2e;
  --color-text: #e8e8e8;
}
```

## 側邊欄

側邊欄包含：

| 區塊 | 內容 |
|------|------|
| 個人資訊 | 頭像、簡介、社群連結、文章統計 |
| 分類 | 所有分類的 badge 列表，支援摺疊展開 |
| 標籤 | 依使用數量排序的標籤 cloud |
| 隨機推薦 | 5 篇隨機文章 |

### 行動裝置支援

行動裝置上的側邊欄會收合到右下角浮動按鈕，點選後以 Drawer 形式滑出。

## 文章目錄

文章頁左側會根據文章的 `h2`/`h3` 標題自動產生目錄導覽：

- 自動醒目標示目前閱讀位置
- 點選後平滑捲動到對應章節
- 行動裝置隱藏

## 分頁

首頁和封存頁支援分頁，每頁 `PAGE_SIZE`（預設 10）篇文章：

- `/` — 第 1 頁
- `/page/2` — 第 2 頁
- `/page/3` — 第 3 頁
- ...

## 文章卡片

每篇文章卡片顯示：

- 封面圖片（或首字母佔位符）
- 分類 badge
- 置頂 ★ 標記
- 編輯中 🖊 標記
- 發布日期
- 字數統計
- 閱讀時間
- 標籤列表

hover 效果：卡片上浮 + 陰影 + 封面縮放。

## 全站搜尋

- `Ctrl+K` 或點選 🔍 開啟搜尋面板
- 搜尋標題、描述、分類、標籤和**文章正文**
- 匹配詞會醒目標示
- 顯示上下文摘要片段

## RSS 訂閱

自動產生 `/rss.xml`，包含全部已發布文章。訂閱連結在 Header 社群圖示和 SEO `<head>` 中。

## SEO 最佳化

每頁自動注入：

| Meta 標籤 | 來源 |
|-----------|------|
| `<title>` | `frontmatter.title + 站台名稱` |
| `<meta description>` | `frontmatter.description` |
| `og:title / og:image` | 文章標題 / 封面圖 |
| `twitter:card` | `summary_large_image` |

## 留言區

使用 Waline 留言系統，支援：

- 暱稱 / 電子郵件 / 網址
- Markdown 語法
- 表情包
- 深色模式自動支援
