import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        args: "none",
      }],
      "no-unused-vars": ["error", {
        args: "none",
      }],
    },
  },
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
    },
]);
