import pluginRouter from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...pluginRouter.configs["flat/recommended"],
  {
    rules: { /* overrides */ },
  },
]);
