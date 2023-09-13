/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
      dark: {
                
        "primary": "#00a6e2",
                
        "secondary": "#919be0",
                
        "accent": "#ffa836",
                
        "neutral": "#d1d3d7",
                
        "base-100": "#262e3f",
                
        "info": "#78a7dd",
                
        "success": "#116f41",
                
        "warning": "#f9da6c",
                
        "error": "#f87263",
        },
      },
    ],
  },
}

