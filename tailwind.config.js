/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        mobile:{max:'440px'},
        tablet:{min: '441px', max: '1024px' },
        desktop:{max:'1440px'}
      }
    },
  },
  plugins: [],
}

