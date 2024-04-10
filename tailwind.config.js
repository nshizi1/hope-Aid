/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '5p': '5%',
      },
      padding: {
        '10p': '10%',
        '5p': '5%',
      },
      aspectRatio: {
        '1/5': '1.5',
      },
    },
  },
  plugins: [],
}
