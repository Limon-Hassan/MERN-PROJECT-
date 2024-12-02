/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'robot-h1': ['"Source Code Pro","monospace"'],
      'popin': ['"Poppins","sans-serif"'],
      'for-all': ['"Roboto Mono","serif"'],
      'for-p': ['"Parkinsans","serif"'],
    },
    extend: {
      maxWidth: {
        container: '1500px',
      },
    },
  },
  plugins: [],
}