// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import stylisticConfig from "@emilyeserven/eslint-config/configs/stylistic.js";
import clientGlobConfig from "@emilyeserven/eslint-config/globConfigs/clientGlob.js";
import configGlobConfig from "@emilyeserven/eslint-config/globConfigs/configGlob.js";
import jsonGlobConfig from "@emilyeserven/eslint-config/globConfigs/jsonGlob.js";
import middlewareGlobConfig from "@emilyeserven/eslint-config/globConfigs/middlewareGlob.js";
import tsGlobConfig from "@emilyeserven/eslint-config/globConfigs/tsGlob.js";
import { globalIgnores } from "eslint/config";
// import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["**/dist/**/*"]),
  ...stylisticConfig,
  ...tsGlobConfig,
  ...clientGlobConfig,
  ...configGlobConfig,
  ...jsonGlobConfig,
  ...middlewareGlobConfig,
]);
