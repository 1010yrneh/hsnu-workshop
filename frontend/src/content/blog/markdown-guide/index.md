---
title: Markdown 語法指南
description: 本主題支援的全部 Markdown 語法範例，包括標題、列表、表格、程式碼區塊、引用、圖片等。
date: 2024-05-20
tags:
  - Markdown
  - CSS
category: 教學
cover: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200
---

## 標題層級

# H1 一級標題
## H2 二級標題
### H3 三級標題
#### H4 四級標題

## 文字格式

**粗體**、*斜體*、~~刪除線~~、`行內程式碼`、[超連結](https://astro.build)。

## 列表

### 無序列表

- 第一項
- 第二項
  - 巢狀項目
  - 另一個巢狀項目
- 第三項

### 有序列表

1. 第一步
2. 第二步
3. 第三步

### 任務列表

- [x] 已完成的任務
- [ ] 待辦事項
- [ ] 另一項待辦

## 引用

> 這是一段引用文字。
>
> 可以有多行和多段。
>
> > 巢狀引用

## 表格

| 姓名 | 年齡 | 城市 |
|------|------|------|
| 張三 | 25 | 北京 |
| 李四 | 30 | 上海 |
| 王五 | 28 | 深圳 |

## 程式碼區塊

### TypeScript

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const getUser = (id: number): Promise<User> => {
  return fetch(`/api/users/${id}`).then(res => res.json());
};
```

### Python

```python
def fibonacci(n: int) -> list[int]:
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result
```

### CSS

```css
.card {
  border-radius: 12px;
  padding: 24px;
  background: var(--color-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### Shell

```bash
#!/bin/bash
for file in *.md; do
  echo "Processing $file"
  sed -i 's/foo/bar/g' "$file"
done
```

## 分隔線

---

## 圖片

![風景](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)

## 註腳

這是一段帶有註腳的文字[^1]。

[^1]: 這是註腳內容。

## HTML 嵌入

<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-sm">
  🔔 提示：本主題支援在 Markdown 中嵌入 HTML 標籤。
</div>
