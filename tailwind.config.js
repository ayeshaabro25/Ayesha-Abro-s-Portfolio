/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-yellow': '#FFD700',
          'custom-gray-dark': '#282c34',
          'custom-gray-light': '#333842',
        },
      },
    },
    plugins: [],
  };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFD700',
        'custom-gray-dark': '#282c34',
        'custom-gray-light': '#333842',
      },
    },
  },
  plugins: [],
};
  