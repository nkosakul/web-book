const tailwindPreset = require('config/tailwind.config');
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  ...tailwindPreset,
};
