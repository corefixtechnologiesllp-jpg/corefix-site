import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        core: {
          50: "#f4f7f0",
          100: "#e7eddc",
          200: "#cedcba",
          300: "#abc493",
          400: "#83a667",
          500: "#648848",
          600: "#4d6d37",
          700: "#3d572d",
          800: "#344827",
          900: "#2d3d24",
          950: "#182016"
        }
      },

      boxShadow: {
        industrial:
          "0 20px 50px rgba(0,0,0,.25)"
      }
    }
  },

  plugins: []
};

export default config;