import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
  {
    ignores: ["coverage/**", "dist/**", "docs/ref/**"],
  },
  js.configs.recommended,
  ...tseslint.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
