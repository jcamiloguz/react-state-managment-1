module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-indent': ['error', 4],
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 'warn'
  }
}
