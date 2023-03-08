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

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'intermate-yellow': '#f8a90c',
        'intermate-yellow-hover': '#b87e08',
        'intermate-shadow' : 'hsla(0, 0%, 75%, 0.5)',
      },
      backgroundImage: {
        'ballen' : "url('.perseus/static/balls.svg')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
    themes: ["light", "dark", "night",
    {
      intermate: {
        primary: "#a991f7",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#fccf47",
        "intermate-yellow": "#f8a90c",
      },
    },
  ],
  },
}

