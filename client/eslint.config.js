import jsConfig from "../lintConfigs/jsConfig.config.js";
import tsConfig from "../lintConfigs/tsConfig.config.js";
import reactConfig from "../lintConfigs/reactConfig.config.js";
import tailwindConfig from "../lintConfigs/tailwindConfig.config.js";
import tsQueryConfig from "../lintConfigs/tsQueryConfig.config.js";
import tsRouterConfig from "../lintConfigs/tsRouterConfig.config.js";
import stylisticConfig from "../lintConfigs/stylisticConfig.config.js";

import globals from "globals";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["dist"]),
  ...tsQueryConfig,
  ...tsRouterConfig,
  ...stylisticConfig,
  {
    files: ["**/*.{js,jsx}"],
    extends: [...jsConfig, ...reactConfig, ...tailwindConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [...jsConfig, ...tsConfig, ...reactConfig, ...tailwindConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
