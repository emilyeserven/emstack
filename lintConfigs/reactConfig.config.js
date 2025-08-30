
import globals from "globals";
import {defineConfig} from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";

export default defineConfig([
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    reactHooks.configs["recommended-latest"],
    reactRefresh.configs.vite,
    {
        settings: {
            react: {
                version: "detect",
            }
        }
    },
    {
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            }
        }
    },
    {
        plugins: {
            react: reactPlugin
        }
    },
    {
        rules: {
            "react/jsx-first-prop-new-line": ["warn", "multiline"]
        }
    }
])