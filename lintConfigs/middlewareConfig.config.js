import { defineConfig } from "eslint/config";

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
]);
