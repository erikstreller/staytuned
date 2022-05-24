const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        light: '#fefefe',
        dark: '#0D1117',
        marine: '#070A1B',
        description: '#7980A0',
        link: '#58a6ff'
      },
      animation: {
        'spin-fast': 'spin .5s linear infinite'
      }
    }
  },
  plugins: []
}
