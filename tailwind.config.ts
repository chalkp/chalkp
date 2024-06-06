import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saochingcha: ['saochingcha', 'sans-serif']
      },
      container: {
        center: true,
        padding: '15px'
      },
    },
    colors: {
      'white': '#ffffff',
      'chalk-orange': '#ee7724',
      'bkk-green': '#0A6430',
      'bkk-dark-green': '#225942',
      'bkk-accent': '#d3be90',
      'bkk-background-white': '#eef1e6'
    }
  },
  plugins: [],
}
export default config
