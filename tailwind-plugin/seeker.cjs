const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss/types/config').PluginCreator} */
const seekerPlugin = ({
  addBase,
  addComponents
}) => {
  addComponents({
    '.seeker-btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.seeker-btn-blue': {
      backgroundColor: '#3490dc',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd'
      },
    },
    '.seeker-btn-red': {
      backgroundColor: '#e3342f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#cc1f1a'
      },
    },
  });
}

module.exports = seekerPlugin;