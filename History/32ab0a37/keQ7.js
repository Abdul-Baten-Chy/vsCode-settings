import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/node_modules/", ".dist/"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "ecmaVersion": 13,
      "sourceType": "module"
    },
    env: {
      "browser": true,
      "es2021": true
    },
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];