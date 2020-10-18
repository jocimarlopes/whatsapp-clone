module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
      js: 'never',
      jsx: 'never'
    }],
    'arrow-parens': ['error', 'as-needed']
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: '.',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      'babel-plugin-root-import': {
        paths: [
          {
            rootPathPrefix: '@src/',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '@components/',
            rootPathSuffix: 'src/components',
          },
          {
            rootPathPrefix: '@store/',
            rootPathSuffix: 'src/store',
          },
          {
            rootPathPrefix: '@hooks/',
            rootPathSuffix: 'src/hooks',
          },
          {
            rootPathPrefix: '@helpers/',
            rootPathSuffix: 'src/helpers',
          },
          {
            rootPathPrefix: '@constants/',
            rootPathSuffix: 'src/constants',
          },
        ],
      },
    }
  }
};
