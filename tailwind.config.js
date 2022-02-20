module.exports = {
  important: true,
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [],
    },
  },
  theme: {
    screens: {
      default: { min: '0px ' },
      mobile: { min: '321px' },
      tablet: { min: '768px' },
      desktop: { min: '1280px' },
    },
    /**
     * Color values are defined in /src/theme/colors.scss.
     * Color names should be sematic in order to provide
     * contextual alignment when thinking about themes.
     * E.g. primary-text-color (semantic) vs black-1 (literal)
     */
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      app: {
        main: 'var(--app-main)',
        search:'var(--app-search)',
        button: 'var(--app-button)',
        button2:'var(--app-button2)',
        footer: 'var(--app-footer)',
        trending:'var(--app-trending)',
        background: 'var(--app-background)',
      },
      typography: {
        tertiary: 'var(--typography-tertiary)',
        primary: 'var(--typography-primary)',
        secondary: 'var(--typography-secondary)',
        success: 'var(--typography-success)',
        error: 'var(--typography-error)',
        light: 'var(--typography-light)',
      },
      button: {
        'hover': 'var(--button-hover)',
        'hover1':'var(--button-hover1)',
        'hover2':'var(--button-hover2)',
        'hover3':'var(--button-hover3)',
        'hover4':'var(--button-hover4)',
        'success': 'var(--button-success)',
        'failure': 'var(--button-failure)',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    }
  },
  variants: {},
  plugins: [],
};
