const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'ip-green': '#2C723F',
      'ip-clear-green': '#017c6e',
      'ip-black': '#000000',
      'ip-white': '#FFFFFF'
    
    },
    fontFamily: {
      'sans': ['sans-serif', ...fontFamily.sans],
      'texto-avenir-regular': ['AvenirNextLTPro-Regular'],
      'texto-bold': ['BancoDoBrasilTextos-Bold'],
      'texto-xbold': ['BancoDoBrasilTextos-XBold'],
    },
    extend: {},
  },
  plugins: [],
}

