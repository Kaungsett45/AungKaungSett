/** @type {import('tailwindcss').Config} */

// Tailwind reads from the CSS variables in index.css so that light and dark
// resolve at runtime. Adding a colour means adding a token there, not here.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
          faint: 'var(--ink-faint)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          wash: 'var(--accent-wash)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
        body: 'var(--font-body)',
        meta: 'var(--font-meta)',
      },
      fontSize: {
        eyebrow: 'var(--text-eyebrow)',
        meta: 'var(--text-meta)',
        body: 'var(--text-body)',
        item: 'var(--text-item)',
        title: 'var(--text-title)',
        display: 'var(--text-display)',
      },
      spacing: {
        section: 'var(--space-section)',
        gutter: 'var(--page-gutter)',
      },
      maxWidth: {
        page: 'var(--page-max)',
        prose: 'var(--prose-max)',
      },
    },
  },
  plugins: [],
}
