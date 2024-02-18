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
        'custom-grey-lighter':'#D9D9D9',
        'custom-grey-bold': '#4C4C4C',
        'custom-grey-bolder': '#3d3d3d',
        'custom-yellow': '#FFD154',
        'custom-blue': '#083344',
        'custom-cream': '#F6EBCD',
        'custom-brown':'#7B3F00'
      }
    },
  },
  plugins: [],
}
