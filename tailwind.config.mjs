export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '160': '40rem'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem'
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'extra-tight': '-0.04em',
        'loose': '0.05em'
      }
    },
  },
  plugins: [],
}