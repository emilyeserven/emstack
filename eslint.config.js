// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import jsConfig from "./lintConfigs/jsConfig.config.js";
import tsConfig from "./lintConfigs/tsConfig.config.js";
import reactConfig from "./lintConfigs/reactConfig.config.js";
import tailwindConfig from "./lintConfigs/tailwindConfig.config.js";
import tsQueryConfig from "./lintConfigs/tsQueryConfig.config.js";
import tsRouterConfig from "./lintConfigs/tsRouterConfig.config.js";
import stylisticConfig from "./lintConfigs/stylisticConfig.config.js";

import globals from "globals";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const nonClientGlobs = [
  "packages/middleware/src/**/*.ts",
  "packages/**/src/**/*.test.{js,ts}",
  "packages/client/server.js",
];

export default tseslint.config([
  globalIgnores(["**/dist/**/*"]),
  ...stylisticConfig,
  {
    files: ["**/*.{js,ts}"],
    ignores: nonClientGlobs,
    extends: [...jsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        __dirname: true,
      },
    },
  },
  {
    files: ["**/*.{ts}"],
    ignores: nonClientGlobs,
    extends: [...tsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        __dirname: true,
      },
    },
  },
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
