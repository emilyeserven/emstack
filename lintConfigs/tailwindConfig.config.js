import eslintParserTypeScript from "@typescript-eslint/parser";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "index.css",
      },
    },
  },
]);
