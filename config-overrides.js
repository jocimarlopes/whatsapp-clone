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
          rootPathPrefix: '@config/',
          rootPathSuffix: './src/config',
        },
        {
          rootPathPrefix: '@components/',
          rootPathSuffix: './src/components',
        },
        {
          rootPathPrefix: '@pages/',
          rootPathSuffix: './src/pages',
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
        {
          rootPathPrefix: '@services/',
          rootPathSuffix: './src/services',
        },
      ],
    },
  ]),
);
