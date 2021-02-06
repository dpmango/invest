/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
const { resolve, relative } = require('path');
import { dependencies as externals } from '../../src/package.json';

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '../../src'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    alias: {
      '@src': resolve(__dirname, '../../src/'),
      '@c': resolve(__dirname, '../../src/components'),
      '@components': resolve(__dirname, '../../src/components'),
      '@ui': resolve(__dirname, '../../src/components/UI'),
      '@helpers': resolve(__dirname, '../../src/helpers'),
      '@config': resolve(__dirname, '../../src/config'),
      '@styles': resolve(__dirname, '../../src/styles'),
      '@style-utils': resolve(__dirname, '../../src/styles/utilities'),
      '@stores': resolve(__dirname, '../../src/stores'),
      '@models': resolve(__dirname, '../../src/models'),
      '@api': resolve(__dirname, '../../src/api'),
      '@services': resolve(__dirname, '../../src/services'),
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};
