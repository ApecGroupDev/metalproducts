import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '12xl': '14rem',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
        'mono-alt': ['var(--font-space-mono)', 'monospace'],
        'serif-alt': ['var(--font-libre)', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
