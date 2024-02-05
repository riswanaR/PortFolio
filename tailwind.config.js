/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "caprasimo": `'Caprasimo', serif`,
        "marhey": `'Marhey', sans-serif;`,
        "bungee":`'Bungee', sans-serif;`,
       
      },
      textColor:{
        "blue-1" :`#007bff`
      },
      backgroundColor:{
        "blue-1" :`#007bff`
      }
    },
  },
  plugins: [],
}

