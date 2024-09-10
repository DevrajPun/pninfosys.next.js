/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '100': '25rem',   // Custom height of 32rem
      },
      boxShadow: {
        '3xl': '0 6px 55px -5px rgba(0, 0, 0, 0.3)',
        '4xl': '0 6px 55px -5px rgba(26, 92, 162, 1)',
        'mxl': '0 0 20px 0px rgb(255, 255, 255, 1)'
      },
    },
  },
  plugins: [],
};
