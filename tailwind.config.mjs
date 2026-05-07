/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          600: '#005a9c',
          700: '#004b82',
          900: '#0b2f4f',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        bangla: ['"Noto Sans Bengali"', 'Kalpurush', 'system-ui', 'sans-serif'],
      },
    },
  },
};
