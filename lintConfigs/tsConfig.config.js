import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
    tseslint.configs.recommended,
    tseslint.configs.strict,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        rules: {
            "@typescript-eslint/ban-ts-comment": ["error", {
                "ts-expect-error": "allow-with-description",
            }],
            "import/order": ["error", {
                "groups": ["type", "builtin", "external", "internal", ["parent", "sibling"], "index", "object"],
                "pathGroups": [
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["type"],
                "newlines-between": "always",
                "alphabetize": {
                    order: "asc",
                    caseInsensitive: true,
                }
            }],
            "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
            "import/no-unassigned-import": ["error", {
                allow: ["**/*.css"],
            }],
            "import/newline-after-import": "error",
            "import/no-relative-packages": "error",
            "import/no-absolute-path": "error",
            "import/no-duplicates": "error",
            "import/no-self-import": "error",
            "import/no-commonjs": "error",
            "import/max-dependencies": ["warn", {
                max: 10,
                ignoreTypeImports: true
            }]
        }
    },
    {
        settings: {
            "import/resolver": {
                typescript: true,
                node: true
            }
        }
    }
])