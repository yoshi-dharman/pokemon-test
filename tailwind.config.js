module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        'normal': '10%',
      },
      boxShadow:{
        'base': '0 10px 8px rgba(0, 0, 0, 0.1), 0 4px 3px rgba(0,0,0, 0.1)',
      },
    },
  },
  plugins: [],
  important: true
}
