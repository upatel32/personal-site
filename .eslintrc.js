module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'import'
  ],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-use-before-define': 'off',
    'import/newline-after-import': 2,
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
