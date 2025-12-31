// eslint.config.mjs
// @ts-check

import eslintPluginAstro from 'eslint-plugin-astro'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['public/scripts/*', 'scripts/*', '.astro/', 'src/env.d.ts']
  }
]