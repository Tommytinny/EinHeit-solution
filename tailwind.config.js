/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      violet: '#2e1065',
      white: '#FFFFFF',
      orange: 'rgb(195, 152, 73)',
      black: '#030712',
      purple: '#352B50',
      line: '#48494a'
    },
    padding: {
      '128px': '128px',
      '32px': '32px',
      '2px': '2px',
      '50px': '50px',
    },
    extend: {
      spacing: {
        '50': '50%',
      },
      /*animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blinkCaret': 'blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blinkCaret: {
          'from, to': {  }
        },
      }*/
    },
  },
  plugins: [],
}

