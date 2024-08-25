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
    extend: {
      fontFamily: {
        saochingcha: ['saochingcha', 'sans-serif'],
        ChulaCharasNew: ['ChulaCharasNew', 'sans-serif']
      },
      container: {
        center: true,
        padding: '15px'
      },
      colors: {
        'chalk-orange': {
          '50' : '#fef7ee',
          '100': '#fdedd7',
          '200': '#fad7ae',
          '300': '#f6ba7b',
          '400': '#f29345',
          '500': '#ee7724',
          '600': '#df5b17',
          '700': '#b94515',
          '800': '#933719',
          '900': '#773017',
          '950': '#40160a',
        },
        'chalk-blue': {
          '50' : '#f0f7ff',
          '100': '#e1effd',
          '200': '#bbdffc',
          '300': '#7fc6fa',
          '400': '#3ba9f5',
          '500': '#249bee',
          '600': '#0570c4',
          '700': '#06599e',
          '800': '#094c83',
          '900': '#0e416c',
          '950': '#092948',
        },
        'chalk-green': {
          '50': '#eefff4',
          '100': '#d8ffe8',
          '200': '#b4fed1',
          '300': '#7afbaf',
          '400': '#24ee77',
          '500': '#0fd862',
          '600': '#05b44e',
          '700': '#088d40',
          '800': '#0d6e36',
          '900': '#0d5a2f',
          '950': '#003317',
        },
        'chalk-purple': {
          '50': '#f4f2ff',
          '100': '#ede7ff',
          '200': '#dbd2ff',
          '300': '#c1adff',
          '400': '#a47fff',
          '500': '#884bff',
          '600': '#7c26ff',
          '700': '#7724ee',
          '800': '#5b10c7',
          '900': '#4c10a2',
          '950': '#2d076e',
        },
        'bkk': {
          'green': '#0a6430',
          'green-nid-nid': '#097234',
          'dark-green': '#225942',
          'bright-green': '#19861a',
          'orange': '#fe750d',
          'blue': '#1485e1',
          'accent': '#d3be90',
          'background-white': '#eef1e6',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
