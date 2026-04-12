# Portfolio Website

A minimalist single-page portfolio website for a Software & Web Developer. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no backend.

## Live Demo

> Deploy to GitHub Pages and replace this with your live URL.

## Features

- **Single Page** — all content in one clean, scrollable page
- **Dark / Light Mode** — toggle with saved preference (localStorage) + respects system setting
- **Responsive** — mobile-first design with breakpoints at 768px and 480px
- **Contact Form** — powered by [Web3Forms](https://web3forms.com/) (no backend needed)
- **Smooth Scrolling** — anchor-based navigation with active link highlighting
- **Accessible** — semantic HTML, ARIA labels, focus-visible states, proper contrast
- **Fast** — zero dependencies, no build step, loads via CDN for fonts and icons only

## Tech Stack

| Layer         | Technology                              |
|---------------|-----------------------------------------|
| Structure     | HTML5                                   |
| Styling       | CSS3 (custom properties, flexbox, grid) |
| Interactivity | Vanilla JavaScript (ES6+)               |
| Icons         | [Lucide Icons](https://lucide.dev/) (CDN) |
| Fonts         | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |
| Contact Form  | [Web3Forms](https://web3forms.com/)     |

## Project Structure

```
portfolio/
├── index.html          # Single HTML file with all sections
├── css/
│   └── style.css       # All styles (custom properties, responsive)
├── js/
│   └── main.js         # Theme toggle, mobile menu, form handling, smooth scroll
├── assets/             # Images and resume (add your own)
├── docs/               # Project documentation
│   ├── PROJECT_SPECIFICATION.md
│   ├── PROJECT_MILESTONES.md
│   └── PROGRESS_TRACKER.md
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Open in browser

Just open `index.html` directly in your browser — no server required.

```bash
# Or use a simple local server if you prefer:
npx serve .
```

### 3. Customize your content

- Open `index.html` and replace:
  - **"John Doe"** with your name
  - **About text** with your bio
  - **Skills** with your actual skills
  - **Projects** with your real projects and links
  - **Contact links** (email, GitHub, LinkedIn) with your URLs
- Update the `<title>` and Open Graph meta tags

### 4. Set up the contact form

1. Go to [web3forms.com](https://web3forms.com/) and create a free account
2. Get your **Access Key**
3. In `index.html`, replace `YOUR_ACCESS_KEY_HERE` with your key

### 5. Deploy to GitHub Pages

1. Push code to your GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main** branch, root folder
4. Your site will be live at `https://yourusername.github.io/portfolio/`

## Customization

### Colors

Edit the CSS custom properties in `css/style.css` under `:root` (light) and `[data-theme="dark"]` (dark):

```css
:root {
  --bg: #fafafa;
  --accent: #2563eb;
  /* ... */
}
```

### Fonts

Replace the Google Fonts link in `index.html` `<head>` and update `--font` in CSS.

### Sections

All sections are in `index.html` with clear HTML comments. Add, remove, or reorder as needed.

## License

This project is open source and available under the [MIT License](LICENSE).
