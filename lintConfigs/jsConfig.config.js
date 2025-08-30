import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            "import/no-unresolved": ["error", {
                caseSensitive: false,
                ignore: [
                    "eslint/config",
                    "typescript-eslint"
                ]
            }],
            "no-console": ["warn"]
        }
    }
])