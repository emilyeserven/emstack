import stylistic from "@stylistic/eslint-plugin";
import {defineConfig} from "eslint/config";

export default defineConfig([
    stylistic.configs.recommended,
    stylistic.configs.customize({
        indent: 2,
        quotes: "double",
        semi: true
    })
])