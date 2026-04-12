# Portfolio Website — Project Specification

## Overview

Build a **single-page**, **static** portfolio website for a Software & Web Developer. No backend, no database, no framework. Pure HTML + CSS + vanilla JavaScript only. Hosted-ready for GitHub Pages.

---

## Tech Stack

| Layer         | Technology                                 |
|---------------|--------------------------------------------|
| Structure     | HTML5 (semantic elements)                  |
| Styling       | CSS3 (custom properties, flexbox, grid)    |
| Interactivity | Vanilla JavaScript (ES6+)                  |
| Icons         | Lucide Icons (CDN)                         |
| Fonts         | Google Fonts — Inter                       |
| Contact Form  | Web3Forms (free, no backend)               |
| Hosting       | GitHub Pages (static)                      |

---

## Design Principles

- **Minimalist**: Lots of whitespace, clean typography, muted color palette
- **Responsive**: Mobile-first, works on all screen sizes
- **Fast**: No build tools, no bundlers, no node_modules — just files
- **Accessible**: Semantic HTML, proper contrast, keyboard navigable
- **Dark/Light mode**: Toggle with CSS custom properties, respect `prefers-color-scheme`

---

## Page Sections

### 1. Navigation (sticky)
- Logo/Name on the left
- Nav links: About, Skills, Projects, Contact
- Dark/light mode toggle button on the right
- Hamburger menu on mobile

### 2. Hero Section
- Large heading: name
- Subtitle: role ("Software & Web Developer")
- One-line tagline/description
- CTA buttons: "View Projects" (scrolls to projects) and "Contact Me" (scrolls to contact)
- Subtle entrance animation (CSS only, no libraries)

### 3. About Section
- Short paragraph about background, what I do, what I enjoy building
- Keep it to 3-4 sentences max

### 4. Skills Section
- Grid of skill cards showing technologies I work with
- Group into categories: Frontend, Backend, Tools & Others
- Each card: icon + technology name
- Skills to include: HTML, CSS, JavaScript, TypeScript, React, Node.js, Python, Git, VS Code, REST APIs, MongoDB, PostgreSQL
- (Adjust this list based on your actual skills)

### 5. Projects Section
- Card-based layout (2-column grid on desktop, 1-column on mobile)
- Each project card contains:
  - Project name
  - Short description (1-2 lines)
  - Tech tags (small pills/badges)
  - Links: "Live Demo" and "Source Code" (GitHub)
- Include 3-4 placeholder projects with realistic descriptions
- Cards should have subtle hover effect

### 6. Contact Section
- Heading: "Get in Touch"
- Short text: "Have a project in mind? Let's talk."
- Contact form with fields: Name, Email, Message, Submit button
- Form uses **Web3Forms** — POST to `https://api.web3forms.com/submit` with an `access_key` hidden field
- Below the form: direct email link and social links (GitHub, LinkedIn)

### 7. Footer
- Copyright line: "© 2026 [Name]. All rights reserved."
- "Built with HTML, CSS & JS" tagline
- Back to top button

---

## File Structure

```
portfolio/
├── index.html              # Single HTML file with all sections
├── css/
│   └── style.css           # All styles (custom properties, responsive)
├── js/
│   └── main.js             # Theme toggle, mobile menu, form handling, smooth scroll
├── assets/
│   └── (placeholder for images/resume if needed later)
├── docs/
│   ├── PROJECT_SPECIFICATION.md
│   └── PROJECT_MILESTONES.md
├── README.md               # Project description
└── .github/
    └── prompts/
        └── build-portfolio.prompt.md
```

---

## Style Guide

### Colors (Light Mode)
| Token           | Value     |
|-----------------|-----------|
| Background      | `#fafafa` |
| Surface/Card    | `#ffffff` |
| Text Primary    | `#1a1a1a` |
| Text Secondary  | `#6b7280` |
| Accent          | `#2563eb` |
| Accent Hover    | `#1d4ed8` |
| Border          | `#e5e7eb` |

### Colors (Dark Mode)
| Token           | Value     |
|-----------------|-----------|
| Background      | `#0f0f0f` |
| Surface/Card    | `#1a1a1a` |
| Text Primary    | `#f5f5f5` |
| Text Secondary  | `#9ca3af` |
| Accent          | `#3b82f6` |
| Accent Hover    | `#60a5fa` |
| Border          | `#2e2e2e` |

### Typography
| Element          | Size                        |
|------------------|-----------------------------|
| Font Family      | `'Inter', sans-serif`       |
| Hero Heading     | `clamp(2rem, 5vw, 3rem)`   |
| Section Heading  | `2rem`                      |
| Body Text        | `1rem`                      |
| Line Height      | `1.6`                       |

### Spacing
| Element           | Value                |
|-------------------|----------------------|
| Section Padding   | `5rem` vertical      |
| Max Content Width | `1100px`, centered   |
| Card Padding      | `1.5rem`             |
| Consistent Gap    | `1rem` – `2rem`      |

---

## Constraints

- **No npm, no node_modules, no build step** — just static files
- **No CSS framework** (no Tailwind, no Bootstrap) — write custom CSS
- **No JS framework** (no React, no Vue) — vanilla JS only
- **No backend** — contact form uses Web3Forms client-side POST
- **Single page** — all content in one `index.html`
- **CDN only** for external resources (fonts, icons)
- All code must be clean, well-commented, and production-quality
