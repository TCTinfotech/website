// PostCSS config: Tailwind v4 moved the PostCSS plugin to a separate package.
// Use `@tailwindcss/postcss` here so PostCSS can load Tailwind correctly.
// See: https://tailwindcss.com/docs/installation#postcss-plugins
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
