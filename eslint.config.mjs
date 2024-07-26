import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    ignorePatterns: ['webpack.config.js'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
