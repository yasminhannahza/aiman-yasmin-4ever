# Next.js (agent) — Important notes and guidance

> This project uses a customized Next.js-based agent environment. It is not the same as the stock Next.js installation — APIs, conventions, and file structure may differ from what you expect from standard Next.js. Read the local docs before changing code:
>
> - node_modules/next/dist/docs/ (if present)

## Purpose of this file

This file explains the constraints and conventions for working with the project's customized Next.js agent and gives practical tips to make the website more user-friendly and visually appealing.

## Quick warnings

- Breaking changes: This variant may change routing, file locations, middleware behavior, and build steps.
- Read local docs: Look inside `node_modules/next/dist/docs/` or any repository README/CONTRIBUTING files before editing major app structure.
- Test locally: Run the dev server and test every UI change, especially routing or _app/_document modifications.

## Recommended developer rules

- Use existing conventions: Follow naming, folder layout, and export patterns used in the repo.
- Avoid large structural refactors without tests and a backup branch.
- Keep production secrets out of the repository. Use environment variables.
- When adding third-party libraries, prefer small, tree-shakable packages to keep bundle size low.

## How to make the site more user-friendly (UX tips)

1. Clear information hierarchy
   - Use a distinct hero headline and short supporting sentence.
   - Make primary actions (call-to-action buttons) visually prominent and first in the tab order.

2. Responsive layout
   - Ensure the design adapts for small (mobile), medium (tablet), and large (desktop) screens.
   - Test touch targets and font sizes on small devices.

3. Accessibility
   - Use semantic HTML (header, main, nav, footer, form elements).
   - Ensure color contrast meets WCAG AA.
   - Provide keyboard focus states and aria-labels where necessary.

4. Performance
   - Optimize images (use WebP, compress, and serve appropriately sized images).
   - Use lazy-loading for below-the-fold images and components.
   - Keep bundle sizes small; split code where appropriate.

5. Feedback & affordances
   - Show loading indicators for async actions.
   - Show success/error messages after form submissions.

6. Reduce friction
   - Minimize required form fields and remember user preferences where appropriate.

## Design features to add (icons, wallpaper, styling)

Below are practical suggestions and the easiest ways to implement them in a Next.js/TypeScript project.

- Icons
  - Use a lightweight icon library like `react-icons` or Heroicons (for Tailwind/DaisyUI). Install: `npm install react-icons` or `npm install @heroicons/react`.
  - Keep icons SVG-based for crisp scaling and smaller size.
  - Place common icons in a shared `components/Icon` component for consistent styling.

- Wallpaper / Backgrounds
  - Add background images or patterns in `public/images/` and reference them in CSS (e.g., `background-image: url('/images/wallpaper.jpg')`).
  - Prefer subtle patterns or gradients to avoid distracting from content. Use CSS gradients for lightweight backgrounds.
  - For full-screen hero backgrounds, use `background-size: cover; background-position: center;` and provide a color overlay for contrast.

- Fonts & Typography
  - Use Google Fonts (import in `_app.tsx` using a <link> in `Head` or via `@import` in CSS) or Next.js built-in Fonts (if using Next 13+).
  - Set a typographic scale (e.g., base font-size, headings H1–H6 sizes) and stick to 2–3 font weights.

- Favicons & Meta
  - Add a favicon in `public/favicon.ico` and social preview images in `public/og-image.png`.
  - Add meta tags in `pages/_document.tsx` or `app/head.tsx` (title, description, open graph tags).

- Theme (Light/Dark)
  - Provide a system-preference-aware toggle using CSS variables and a small JS toggle that updates `data-theme` on the `html` element.

- UI Frameworks
  - Tailwind CSS for quick utility styling and responsive layout. Pair with Headless UI or DaisyUI for components.
  - Component libraries like Chakra UI or Material UI for accessible, pre-built components if you prefer a component-driven approach.

## Suggested project file structure for assets

- public/
  - favicon.ico
  - images/
    - wallpaper.jpg
    - hero-photo.webp
    - og-image.png
  - icons/
    - logo.svg

- components/
  - Icon/
  - Header.tsx
  - Footer.tsx
  - Hero.tsx

- styles/
  - globals.css (CSS variables, fonts, base styles)

## Small code examples

1) Add Google Fonts via Head (example in pages/_app.tsx or app/head.tsx):

```tsx
// Example: pages/_app.tsx
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
```

2) Background image via CSS (styles/globals.css):

```css
:root {
  --bg-overlay: rgba(0,0,0,0.35);
}

.hero {
  background-image: url('/images/wallpaper.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bg-overlay);
}

.hero-content {
  position: relative; /* keep content above overlay */
  z-index: 1;
}
```

3) Simple favicon link in Head

```tsx
<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

## Accessibility checklist (quick)

- All images have descriptive alt text.
- Buttons and links are reachable by keyboard (tab order is logical).
- Color contrast ratio >= 4.5:1 for body text.
- Use aria-live for dynamic content updates.

## Performance checklist (quick)

- Compress images and use WebP where possible.
- Use next/image (or equivalent) for automatic optimization.
- Remove unused CSS and dependencies.

## Next steps I can take for you

- Add a starter global stylesheet (globals.css) and example Hero component with wallpaper and icons.
- Add assets placeholders (favicon, wallpaper) into `public/`.
- Integrate Tailwind CSS and a simple design system.

If you want, I can create those files and commit them to this repository now — tell me which option you'd like (e.g., "Add Hero + globals.css + wallpaper placeholder" or "Integrate Tailwind + sample components").
