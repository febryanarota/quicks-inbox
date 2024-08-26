import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          blue: '#2F80ED',
          darkGray: '#4F4F4F',
          gray: '#828282',
          lightGray: '#E0E0E0',
        },
        indicator: {
          peach: '#F8B76B',
          purple: '#8785FF',
          red: '#EB5757',
          yellow: '#F2C94C',
        },
        chats: {
          lightPeach: '#FCEED3',
          darkPeach: '#E5A443',
          lightBlue: '#EEDCFF',
          purple: '#9B51E0',
          lightGreen: '#D2F2EA',
          teal: '#43B78D',
        },
        stickers: {
          lightBlue: '#E9F3FF',
          peach: '#FDCFA4',
          pink: '#F9E9C3',
          mint: '#AFEBDB',
          green: '#CBF1C2',
          lavender: '#CFCEF9',
          lilac: '#F9E0FD',
        },
      },
    },
  },
  plugins: [],
};
export default config;
