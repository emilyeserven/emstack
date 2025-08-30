import { defineConfig } from "eslint/config";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default defineConfig([
    ...pluginQuery.configs["flat/recommended"],
    {
        rules: {
            /* overrides */
        }
    }
])