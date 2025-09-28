import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      "import/order": ["error", {
        "groups": ["type", "builtin", "external", "internal", ["parent", "sibling"], "index", "object"],
        "pathGroups": [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        "pathGroupsExcludedImportTypes": ["type"],
        "newlines-between": "always",
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
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
        ignoreTypeImports: true,
      }],
      /* Causing errors, turning off for now. */
      "import/default": 0,
      "import/no-named-as-default-member": 0,
      "import/no-unresolved": 0,
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
]);
