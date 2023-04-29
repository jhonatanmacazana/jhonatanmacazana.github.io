/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  arrowParens: "always",
  bracketSpacing: true,
  jsxSingleQuote: false,
  semi: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};
