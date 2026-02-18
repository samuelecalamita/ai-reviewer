import pvEslintTS from "@pro-vision/eslint-config-pv/typescript";
import pvEslintPrettier from "@pro-vision/eslint-config-pv/prettier";

export default [
  {
    ignores: ["dist/**", "storybook-static/**", "node_modules/**"],
  },
  ...pvEslintTS,
  ...pvEslintPrettier,
];
