module.exports = {
  purge: { content: ['*.html', './src/**/*.{js,ts,jsx,tsx,vue}'] },
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        'Roboto',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
