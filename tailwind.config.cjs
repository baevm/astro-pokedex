/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        SourceCode: ['SourceCode', 'sans-serif'],
        PPm: ['PPm'],
      },
      colors: {
        'primary-text-color': 'var(--primary-text-color)',
        'second-text-color': 'var(--second-text-color)',
        'bg-color': 'var(--bg-color)',
        'second-bg-color': 'var(--second-bg-color)',
        'border-color': 'var(--border-color)',
        'active-border-color': 'var(--active-border-color)',
        'recent-search-color': 'var(--recent-search-color)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
