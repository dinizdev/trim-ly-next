/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF7A29', // Laranja vibrante
        secondary: '#1E1E2F', // Azul escuro quase preto
        accent: '#66C2FF', // Azul claro para botões e links
        background: '#F8F9FA', // Cinza claro
        text: '#333D4B', // Cinza escuro para leitura
      },
    },
  },
  plugins: [],
}
