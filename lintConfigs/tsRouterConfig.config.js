import { defineConfig } from "eslint/config";
import pluginRouter from "@tanstack/eslint-plugin-query";

export default defineConfig([
    ...pluginRouter.configs["flat/recommended"],
    {
        rules: {
            /* overrides */
        }
    }
])