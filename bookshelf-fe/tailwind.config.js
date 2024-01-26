/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey-light': '#9D9B93',
        'custom-grey-bold': '#4C4C4C',
        'custom-yellow': '#FFD154',
        'custom-blue': '#083344',
        'custom-cream': '#F6EBCD'
      }
    },
  },
  plugins: [],
}

