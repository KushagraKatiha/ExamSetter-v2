/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'enterprise-bg': '#c1e1e8',
        'enterprise-dark': '#112d3b',
        'enterprise-primary': '#007f91',
        'enterprise-success': '#8acd84',
      },
    },
  },
  plugins: [],
}