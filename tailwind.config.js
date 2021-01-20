const purge = process.env.NODE_ENV === 'production' ? [
  './src/**/*.html',
  './src/**/*.js',
  './src/**/*.vue',
  './src/**/*.scss',
  './src/**/*.css',
  './.storybook/*.js',
] : []

module.exports = {
  purge,
  darkMode: false,
  theme: {
    extend: {},
    spacing: {
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '4': '1rem',
      '8': '2rem',
      '16': '4rem',
      '32': '8rem',
      '64': '16rem',
      '128': '32rem',
      '256': '64rem',
    },
    margin: {
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '4': '1rem',
      '8': '2rem',
      '16': '4rem',
      '32': '8rem',
    },
    padding: {
      '0': '0px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '4': '1rem',
      '8': '2rem',
      '16': '4rem',
      '32': '8rem',
    },
    borderRadius: {
      'none': '0',
      'xs': '0.25rem',
      'sm': '0.5rem',
      'DEFAULT': '10px',
      'md': '1rem',
      'lg': '2rem',
      'full': '9999px',
    },
    fontSize: {
      'tiny': '0.5rem',
      '2xs': '0.625rem',
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'dark-blue': '#1c4476',
      'primary': '#0f6eb5', // ~ 1970b3
      'light-blue': '#91bbed',
      'lighter-blue': '#e9f0f7',
      'teal': '#41bf80',
      'green': '#2ecc71',
      'light-green': '#8ac891',
      'lighter-red': '#ffdede',
      'light-red': '#ff494b',
      'red': '#ff0000',
      'dark-red': '#cd5860',
      'gray': {
        '3': '#333',
        '6': '#666',
        '9': '#999',
        'c': '#ccc',
        'e': '#eee',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
