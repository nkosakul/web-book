const tailwindPreset = require('config/tailwind.config');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  ...tailwindPreset,
};
