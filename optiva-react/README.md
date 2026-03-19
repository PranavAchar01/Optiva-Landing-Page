# Optiva — Minimalist React Landing Page

A complete redesign of the Optiva landing page with a professional, minimalist black and white aesthetic.

## Design Philosophy

This redesign emphasizes **simplicity and effectiveness** through:

### Typography
- **IBM Plex Sans** for headings and body text (professional, refined alternative to generic fonts)
- **IBM Plex Mono** for code blocks and technical content
- Tighter letter spacing and refined type scale
- No aggressive sizing - everything is measured and intentional

### Color System
- Pure black (#000000) and white (#ffffff) as primary colors
- Sophisticated grayscale palette for hierarchy
- **No gradients** - eliminated all gradient effects from the original
- **No colored accents** - removed the blue accent color entirely
- Focus on contrast, spacing, and typography for visual interest

### Layout & Visual Design
- Clean, grid-based layouts using CSS Grid
- Generous whitespace for breathing room
- Borders and dividers for structure instead of colored backgrounds
- Minimal, purposeful animations (150ms transitions)
- Professional, editorial aesthetic

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Fixed navigation bar
│   ├── Hero.jsx           # Hero section with CTA
│   ├── HowItWorks.jsx     # 5-step pipeline explanation
│   ├── Features.jsx       # Core features grid
│   ├── Prototype.jsx      # Video demo section
│   ├── Screenshots.jsx    # Product screenshots
│   ├── ScoreTable.jsx     # Scoring engine table
│   ├── Vision.jsx         # Future roadmap
│   ├── Waitlist.jsx       # Email signup form
│   └── Footer.jsx         # Footer navigation
├── styles/
│   └── App.css           # Complete design system
├── App.jsx               # Main application
└── main.jsx             # Entry point
```

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server runs on `http://localhost:5173/`

## Key Differences from Original

| Aspect | Original | New Design |
|--------|----------|------------|
| **Colors** | Dark background with blue accent (#00c2ff) | Pure black & white with grayscale |
| **Gradients** | Multiple radial/linear gradients | Zero gradients |
| **Typography** | Clash Display + Satoshi | IBM Plex Sans + Mono |
| **Feel** | Tech-forward, vibrant | Editorial, minimalist |
| **Accents** | Electric blue highlights | Pure contrast |
| **Framework** | Static HTML | React components |

## Design Tokens

The design system uses a complete set of tokens:

- **Type Scale**: 9 sizes from 12px to 64px
- **Spacing Scale**: 8px base grid (4px to 128px)
- **Grayscale**: 10 shades from pure white to pure black
- **Layout Widths**: 640px (narrow), 960px (default), 1200px (wide), 1440px (full)

## Components Breakdown

Each section is a self-contained React component with semantic HTML and accessible markup. No external UI libraries - everything is custom-built for this specific design system.

## Browser Support

Modern browsers with CSS Grid and Flexbox support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

**Optiva v0.1.0** — Built with React + Vite
