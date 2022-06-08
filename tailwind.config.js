module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#3d51fa',
          200: '#2f3aff',
          300: '#1f24ff',
          400: '#0f0cff',
        },
        gold: {
          100: '#ffd700',
          200: '#ffc000',
          300: '#ffa000',
          400: '#ff8000',
          500: '#ff6000',
          600: '#ff4000',
          700: '#ff2000',
          800: '#ff0000',
        }
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1536px'},
      '3xl': {'max': '1920px'},
      '4xl': {'max': '2560px'},
      '5xl': {'max': '3840px'},
    },
  },
  plugins: [],

}
