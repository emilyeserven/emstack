// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import importConfig from "@emilyeserven/eslint-config/configs/import.js";
import stylisticConfig from "@emilyeserven/eslint-config/configs/stylistic.js";
import { globalIgnores } from "eslint/config";
// import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

import jsConfig from "./lintConfigs/jsConfig.config.js";
import middlewareConfig from "./lintConfigs/middlewareConfig.config.js";
import reactConfig from "./lintConfigs/reactConfig.config.js";
import tailwindConfig from "./lintConfigs/tailwindConfig.config.js";
import tsConfig from "./lintConfigs/tsConfig.config.js";
import tsQueryConfig from "./lintConfigs/tsQueryConfig.config.js";
// eslint-disable-next-line import/max-dependencies
import tsRouterConfig from "./lintConfigs/tsRouterConfig.config.js";

const nonClientGlobs = [
  "packages/middleware/src/**/*.ts",
  "packages/**/src/**/*.test.{js,ts}",
  "packages/client/server.js",
];

export default tseslint.config([
  globalIgnores(["**/dist/**/*"]),
  ...stylisticConfig,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: nonClientGlobs,
    extends: [...jsConfig, ...importConfig],
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
    files: ["packages/client/src/**/*.{js,jsx,ts,tsx}"],
    extends: [...tsQueryConfig, tsRouterConfig],
  },
  {
    files: ["packages/client/src/**/*.{jsx,tsx}"],
    extends: [...reactConfig, ...tailwindConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.config.{js,ts}"],
    extends: [...jsConfig],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.json"],
    extends: [...jsConfig],
    rules: {
      "@stylistic/quote-props": 0,
      "@stylistic/semi": 0,
      "@stylistic/comma-dangle": 0,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: nonClientGlobs,
    extends: [...middlewareConfig],
  },
]);
