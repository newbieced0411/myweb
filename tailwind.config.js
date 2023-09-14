/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "gray-default": "#ffffff",
        "gray-900": "#111827",
        "gray-600": "#4b5563",
        "gray-50": "#f9fafb",
      },
    },
  },
  plugins: [],
}
