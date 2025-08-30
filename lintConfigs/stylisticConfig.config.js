import stylistic from "@stylistic/eslint-plugin";
import {defineConfig} from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
    tseslint.configs.stylistic,
    stylistic.configs.recommended,
    stylistic.configs.customize({
        semi: true
    }),
    {
        plugins: {
            "@stylistic": stylistic,
        },
    },
    {
        rules: {
            "@stylistic/indent": ["error", 2],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/object-property-newline": ["error", {
                allowAllPropertiesOnSameLine: false,
            }],
            "@stylistic/object-curly-newline": ["error", {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 1,
                }
            }],
            "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
            "@stylistic/brace-style": "error",
            "@stylistic/jsx-indent-props": ["error", 2],
            "@stylistic/jsx-max-props-per-line": ["error", {
                maximum: 1
            }],
            "@stylistic/jsx-one-expression-per-line": ["error", {
                allow: "non-jsx"
            }],
            "@stylistic/jsx-self-closing-comp": "error",
            "@stylistic/jsx-wrap-multilines": ["error", {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens-new-line",
                condition: "parens-new-line",
                logical: "parens-new-line",
            }]
        }
    }
])