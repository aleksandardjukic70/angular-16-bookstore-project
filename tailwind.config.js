/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}', ], //  TAILWIND ĆE STILIZOVATI(TARGETING) SRC FOLDER I SVE PODATKE U NJEMU, POSEBNO .html i .ts FAJLOVE
     //  AKO TAILWIND TVRDOGLAVO ODBIJA DA BUDE INICIJALIZOVAN: https://tailwindcss.com/docs/installation, 
     //  "npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch"
  theme: {
    extend: {},
  },
  plugins: [],
}

