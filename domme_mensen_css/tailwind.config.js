/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.rs",
  "./static/**/*.rs",
  "./static/**/*.html"
],
  theme: {
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    variants: {
      display: ["group-hover"]
    },
    fontFamily: { 'sans': ['roboto', 'sans-serif']},

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'intermate-yellow': 'hsla(40, 94%, 51%, 1)',
        'intermate-yellow-hover': 'hsla(40, 92%, 38%, 1)',
        'intermate-shadow' : 'hsla(0, 0%, 75%, 0.5)',
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "intermate_dark",
    themes: [ {
      intermate_light: {
        primary: "hsla(40, 94%, 51%, 1)", /*This Intermate yellow*/
        "primary-focus": "hsla(40, 92%, 38%, 1)", /*This Intermate yellow on hover, in other words focus*/
        secondary: "hsla(140, 92%, 38%, 1)", /*Needs to be changed*/
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "hsla(0, 0%, 100%, 1)",
      },
      intermate_dark: {
        primary: "hsla(40, 94%, 51%, 1)",
        "primary-focus": "hsla(40, 92%, 38%, 1)",
        secondary: "hsla(140, 20%, 38%, 1)", /*Needs to be changed*/
        accent: "hsla(40, 92%, 38%, 1)",
        neutral: "hsla(40, 92%, 38%, 1)",
        "base-100": "hsla(0, 0%, 0%, 1)",
      },
    },
  ],
  },
}

