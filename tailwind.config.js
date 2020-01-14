module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffceff',
          200: '#e8b1ff',
          300: '#ca94e9',
          400: '#ad79cb',
          500: '#905eae',
          600: '#744492',
          700: '#592b77',
          800: '#3f125c',
          900: '#250043',
        },
        secondary: {
          100: '#9a929f',
          200: '#7f7784',
          300: '#655d69',
          400: '#4c4450',
          500: '#342d38',
          600: '#1e1722',
          700: '#03000a',
          800: '#000000',
          900: '#000000',
        },
      }
    },
    linearGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        'primary': ['#905eae', '#b684d3']
      },
    },
    radialGradients: {
      shapes: { // defaults to this value
        'default': 'ellipse',
      },
      sizes: { // defaults to this value
        'default': 'closest-side',
      },
      positions: { // defaults to these values
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
    },
    conicGradients: {
      startingAngles: { // defaults to this value
        'default': '0',
      },
      positions: { // defaults to these values
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'checkerboard': ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg'],
      },
    },
    repeatingLinearGradients: theme => ({
      directions: theme('linearGradients.directions'), // defaults to the same values as linearGradients’ directions
      colors: theme('linearGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
    repeatingRadialGradients: theme => ({
      shapes: theme('radialGradients.shapes'), // defaults to the same value as radialGradients’ shapes
      sizes: { // defaults to this value
        'default': 'farthest-corner',
      },
      positions: theme('radialGradients.positions'), // defaults to the same values as radialGradients’ positions
      colors: theme('radialGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
    repeatingConicGradients: theme => ({
      startingAngles: theme('conicGradients.startingAngles'), // defaults to the same value as conicGradients’ startingAngles
      positions: theme('conicGradients.positions'), // defaults to the same values as conicGradients’ positions
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'starburst': ['white 0 5deg', 'blue 5deg'],
      },
      lengths: { // defaults to {}
        'sm': '10deg',
        'md': '20deg',
        'lg': '40deg',
      },
    }),

    pseudo: { // defaults to {'before': 'before', 'after': 'after'}
      'before': 'before',
      'after': 'after',
      'not-first': 'not(:first-child)',
    }
  },
  variants: { // all the following default to ['responsive']
    backgroundImage: ['responsive'], // this is for the "bg-none" utility
    linearGradients: ['responsive'],
    radialGradients: ['responsive'],
    conicGradients: ['responsive'],
    repeatingLinearGradients: ['responsive'],
    repeatingRadialGradients: ['responsive'],
    repeatingConicGradients: ['responsive'],
    backgroundColor: ['not-first', 'dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [
    require('tailwindcss-gradients')(),
    require('tailwindcss-pseudo')(),
    require('tailwindcss-dark-mode')()
  ]
}
