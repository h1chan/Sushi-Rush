# 🍣 Sushi Rush

> Responsive sushi restaurant website built following **Bedimcode**'s tutorial.  
> Vanilla HTML/CSS/JS, Swiper menu tabs, mobile-first navigation, scroll animations.  
> Fresh code, fresher sushi.

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Swiper-6332F6?logo=swiper&logoColor=white" alt="Swiper"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"/>
</p>

---

## 📸 Preview

<p align="center">
  <img src="assets/img/preview.png" alt="Sushi Rush — Sushi Restaurant Preview" width="800"/>
</p>

---

## ✨ Features

- **Fully Responsive** — mobile-first, breakpoints at 320px, 540px, 1150px
- **Swiper Menu Tabs** — 5 categories (Sushi, Nigiri, Ramen, Udon, Others) with thumbnail navigation
- **Mobile Hamburger Menu** — slide-in nav, auto-closes on link click
- **Scroll Header** — header style changes on scroll
- **CSS Custom Properties** — theming, responsive typography
- **Vanilla Stack** — zero frameworks, no build step
- **Semantic & Accessible** — semantic HTML, alt texts, focus states
- **Japanese Accents** — kanji decorations, sakura & leaf ornaments

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, Grid, Flexbox, Animations |
| JavaScript (ES6+) | DOM, Swiper init, Menu & header logic |
| [Swiper](https://swiperjs.com/) | Menu tabs + thumbnail sliders |
| [Remixicon](https://remixicon.com/) | Icon font |
| [Google Fonts](https://fonts.google.com/) | Montserrat, Lora |

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/h1chan/Sushi-Rush.git
cd Sushi-Rush

# Open index.html in browser
# (or run Live Server in VS Code)
```

No `npm install`, `build`, or dependencies — pure frontend.

---

## 📁 Project Structure

```
Sushi-Rush/
├── index.html           # Entry point
├── assets/
│   ├── css/
│   │   └── styles.css   # All styles
│   ├── js/
│   │   └── main.js      # All logic
│   └── img/             # Dishes, decorations, favicon, preview
└── README.md
```

Sections in `index.html`: Home · About · Menu · Special (Sashimi Oishi).

---

## 🎨 Customization

| What to change | Where to look |
|----------------|---------------|
| Brand colors | `:root` in `styles.css` (`--first-color`, `--first-color-alt`, `--body-color`...) |
| Fonts | `@import` in `styles.css` + `--body-font`, `--second-font` |
| Dishes & prices | `index.html` → `menu__card` blocks |
| Menu tabs | `main.js` → Swiper configs (`menu__tabs`, `menu__content`) |
| Content | `index.html` (texts, links, images) |

---

## 📱 Responsive Breakpoints

```css
/* Mobile First → */
@media screen and (width <= 320px)  { /* Small phones */ }
@media screen and (width >= 540px)  { /* Large phones / small tablets */ }
@media screen and (width <= 1150px) { /* Tablet / mobile menu */ }
@media screen and (width >= 1150px) { /* Desktop */ }
```

---

## 🙏 Credits

Built following [Bedimcode](https://www.youtube.com/@Bedimcode)'s  
**"Responsive Sushi Website"** tutorial on YouTube.

🎬 [Watch the Demo & Code](https://youtu.be/fnjpiX4QYzo)

Original design & tutorial by Bedimcode — thank you for the amazing content!

---

## 📄 License

[MIT License](LICENSE) — free to use, modify, distribute.  
Keep a copy of the license when forking.

---

## 👤 Author

h1chan — [GitHub](https://github.com/h1chan) · [Discord](https://discord.com/users/1064052965247295518)

---

<p align="center">
  Made with 🍣 and vanilla JS
</p>
