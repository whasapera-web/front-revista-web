/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Agrega esta línea para definir colores personalizados
        nvPink: "#ec008c",
        verFont: "#9ec34a",
        contac: "#815f70"
      },
      rotate: {
        '00': '-10deg',
      },
      screens: {
        'le': '360px',
      },
      spacing: {
        '2vh': '80vh',
        "21":  "5.9rem",
        "112": "31rem"
      }
    },
  },
  plugins: [],
}
