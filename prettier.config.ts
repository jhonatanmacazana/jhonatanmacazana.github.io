import type { Config } from "prettier";

export default {
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  arrowParens: "always",
  bracketSpacing: true,
  jsxSingleQuote: false,
  semi: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],

  tailwindStylesheet: "./src/styles/global.css",
  tailwindFunctions: ["clsx", "cn", "cva"],

  importOrder: ["<THIRD_PARTY_MODULES>", "", "^@/(.*)$", "", "^[./]"],
  importOrderTypeScriptVersion: "5.0.0",

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} as Config;
