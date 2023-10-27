/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'animate-gradient--activists',
    'animate-gradient--builders',
    'animate-gradient--artists',
    'animate-gradient--creators',
    'animate-gradient--advocates',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      screens: {
        sm: '40rem', // 640px
        md: '48rem', // 768px
        lg: '64rem', // 1024px
        xl: '80rem', // 1280px
        '2xl': '96rem', // 1536px
      },
      fontFamily: {
        body: ["'Inter'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
