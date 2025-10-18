// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import middlewareConfig from "@emilyeserven/eslint-config/configs/middleware.js";
import reactBundleConfig from "@emilyeserven/eslint-config/configs/reactBundle.js";
import stylisticConfig from "@emilyeserven/eslint-config/configs/stylistic.js";
import tailwindConfig from "@emilyeserven/eslint-config/configs/tailwind.js";
import clientBaselineGlobConfig from "@emilyeserven/eslint-config/globConfigs/clientBaselineGlob.js";
import configGlobConfig from "@emilyeserven/eslint-config/globConfigs/configGlob.js";
import jsonGlobConfig from "@emilyeserven/eslint-config/globConfigs/jsonGlob.js";
import tsGlobConfig from "@emilyeserven/eslint-config/globConfigs/tsGlob.js";
import { globalIgnores } from "eslint/config";
// import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

const nonClientGlobs = [
  "packages/middleware/src/**/*.ts",
  "packages/**/src/**/*.test.{js,ts}",
  "packages/client/server.js",
];

export default tseslint.config([
  globalIgnores(["**/dist/**/*"]),
  ...stylisticConfig,
  ...reactBundleConfig,
  ...tsGlobConfig,
  ...clientBaselineGlobConfig,
  ...configGlobConfig,
  ...jsonGlobConfig,
  {
    files: ["packages/client/src/**/*.{jsx,tsx}"],
    extends: [...tailwindConfig],
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
