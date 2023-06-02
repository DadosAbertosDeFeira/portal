module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
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
        text: {
          DEFAULT: '#163e7a',
          dark: '#232b4e',
        },
        gray: {
          darkest: '#212429',
          dark: '#495057',
          2: '#A8B9C8',
          DEFAULT: '#ACB5BD',
          light: '#DDE2E5',
          lightest: '#F8F9FA',
        },
        black: {
          DEFAULT: '#0b1b32',
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
        '2xl': '56px',
        '3xl': '80px',
        '4xl': '128px',
        '5xl': '184px',
        '6xl': '256px',
      },
      boxShadow: {
        DEFAULT: '0px 4px 30px rgba(0, 0, 0, 0.2)',
        md: '0px -4px 30px rgba(0, 0, 0, 0.2)',
        3: '0px 6px 12px #0000000d',
      },
      height: {
        'mobile-header': '68px',
        'desktop-header': '77px',
      },
      width: {
        'mobile-header': '100vw',
        'desktop-header': 'calc(100vw - min(600px, 45vw) + 100px)',
      },
      minWidth: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '56px',
        '3xl': '80px',
        '4xl': '128px',
        '5xl': '184px',
        '6xl': '256px',
      },
      backgroundImage: {
        'city-pattern': "url('/assets/home-background.svg')",
        'waved-banner': "url('/assets/menu-banner.svg')",
        '404-background': "url('/assets/404-background.svg')",
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
        'large-desktop': '1536px',
      },
    },
  },
  plugins: [],
};
