import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      // 1200px looks fire af
      xl: "1200px",
    },
    colors: {
      'white': '#ffffff',
      'chalk-orange': '#ee7724',
      'bkk-green': '#0A6430',
      'bkk-dark-green': '#225942',
      'bkk-bright-green': '#19861a',
      'bkk-accent': '#d3be90',
      'bkk-background-white': '#eef1e6'
    },
    extend: {
      fontFamily: {
        saochingcha: ['saochingcha', 'sans-serif'],
        ChulaCharasNew: ['ChulaCharasNew', 'sans-serif']
      },
      container: {
        center: true,
        padding: '15px'
      },
    },
  },
  plugins: [],
}
export default config
