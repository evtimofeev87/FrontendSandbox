module.exports = {
  root: true,
  env: {
    node: true
  },

  rules: {
    "vue/no-unused-components": "off",
    'quotes':'quotes',
    'prettier/prettier': 'off',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'vue/max-attributes-per-line': 'off',
    'max-len': ['error', { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};