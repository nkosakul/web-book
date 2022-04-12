const tailwindPreset = require('config/tailwind.config');
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // TODO: try to find another way to include tailwind classes from ui-lib
    '../packages/ui-lib/src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  ...tailwindPreset,
};
