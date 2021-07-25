module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        't-lg': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
