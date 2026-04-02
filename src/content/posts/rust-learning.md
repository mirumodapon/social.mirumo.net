---
author: "Kyoshi"
handle: "kyoshi"
avatar: "auto"
abstract: "最近開始學 Rust 了，所有權的概念一開始真的很難懂，但理解之後覺得這個設計太聰明了！"
date: "2026-04-01T11:00:00"
tags: ["Rust", "程式語言"]
---

最近開始學 Rust 了，所有權的概念一開始真的很難懂 😅

但理解之後覺得這個設計太聰明了！

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 的所有權轉移到 s2

    // println!("{}", s1); // 編譯錯誤！s1 已經無效了
    println!("{}", s2); // OK!
}
```

> 「如果它能編譯，它就能跑。」— Rust 社群名言

Rust 的型別系統和借用檢查器就像一個嚴格的老師，雖然一開始很痛苦，但確實能寫出更安全的程式碼。
