module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        xs: ['11px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['24px', '29px'],
        xl: ['48px', '72px'],
      },
      colors: {
        primary: {
          light: '#9FD4FF',
          DEFAULT: '#3793DF',
          dark: '#0063B5',
        },
        secondary: {
          light: '#FFEA97',
          DEFAULT: '#FFCC00',
          dark: '#FF9A02',
        },
        gray: {
          darkest: '#212429',
          dark: '#495057',
          DEFAULT: '#ACB5BD',
          light: '#DDE2E5',
          lightest: '#F8F9FA',
        },
        alert: {
          DEFAULT: '#FF0000',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
