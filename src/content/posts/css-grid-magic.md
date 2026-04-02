---
author: "設計師阿華"
handle: "designhua"
avatar: "auto"
abstract: "CSS Grid 真的是前端排版的魔法，以前用 float 排版要寫一堆 hack，現在只要幾行就搞定三欄式佈局！"
date: "2026-03-30T16:00:00"
series:
  id: "frontend-tutorial"
  name: "前端教學"
tags: ["CSS", "前端", "教學"]
---

CSS Grid 真的是前端排版的魔法 ✨

以前用 float 排版要寫一堆 hack，現在只要幾行就搞定：

```css
.layout {
  display: grid;
  grid-template-columns: 275px 1fr 350px;
  gap: 0;
  min-height: 100vh;
}
```

三欄式佈局就完成了！響應式也很簡單：

```css
@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 275px 1fr;
  }
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

不會 CSS Grid 的前端工程師，快去學！
