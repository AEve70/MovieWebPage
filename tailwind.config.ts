import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lilac: '#D9AEE8',
        purpleSoft: '#BF9BCC',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

export default config
