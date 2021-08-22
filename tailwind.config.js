module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      transitionDuration: {
                  '0': '0ms',
                  '800': '80ms',
                },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
