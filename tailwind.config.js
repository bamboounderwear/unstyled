const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./_site/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f4f4f4',
          200: '#e4e4e4',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      // Utopia fluid spacing scale
      spacing: {
        'fluid-1': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 1vw, 1rem)',
        'fluid-3': 'clamp(1rem, 2vw, 2rem)',
        'fluid-4': 'clamp(1.5rem, 3vw, 3rem)',
        'fluid-5': 'clamp(2rem, 4vw, 4rem)',
      },
      // Utopia fluid typography
      fontSize: {
        'fluid-sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        'fluid-base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        'fluid-lg': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        'fluid-xl': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        'fluid-2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        'fluid-3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
      },
      borderRadius: {
        none: '0',
      },
      prose: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#404040',
            p: {
              marginTop: 'clamp(1rem, 2vw, 2rem)',
              marginBottom: 'clamp(1rem, 2vw, 2rem)',
            },
            'h2, h3, h4': {
              color: '#171717',
              marginTop: 'clamp(2rem, 4vw, 4rem)',
              marginBottom: 'clamp(1rem, 2vw, 2rem)',
            },
            ul: {
              marginTop: 'clamp(1rem, 2vw, 2rem)',
              marginBottom: 'clamp(1rem, 2vw, 2rem)',
            },
            li: {
              marginTop: 'clamp(0.5rem, 1vw, 1rem)',
              marginBottom: 'clamp(0.5rem, 1vw, 1rem)',
            },
            a: {
              color: '#171717',
              textDecoration: 'none',
              borderBottom: '1px solid #737373',
              '&:hover': {
                borderColor: '#171717',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};