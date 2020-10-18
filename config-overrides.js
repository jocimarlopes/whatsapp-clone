const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathPrefix: '@src/',
          rootPathSuffix: './src',
        },
        {
          rootPathPrefix: '@components/',
          rootPathSuffix: './src/components',
        },
        {
          rootPathPrefix: '@store/',
          rootPathSuffix: './src/store',
        },
        {
          rootPathPrefix: '@hooks/',
          rootPathSuffix: './src/hooks',
        },
        {
          rootPathPrefix: '@helpers/',
          rootPathSuffix: './src/helpers',
        },
        {
          rootPathPrefix: '@constants/',
          rootPathSuffix: './src/constants',
        },
      ],
    },
  ]),
);
