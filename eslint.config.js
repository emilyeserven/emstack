import jsConfig from "./lintConfigs/jsConfig.config.js";
import tsConfig from "./lintConfigs/tsConfig.config.js";
import stylisticConfig from "./lintConfigs/stylisticConfig.config.js";

import globals from "globals";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["dist"]),
  ...stylisticConfig,
  {
    files: ["**/*.{js,jsx}"],
    extends: [...jsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [...jsConfig, ...tsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
