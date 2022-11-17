const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
// *** IS WorkPlugin NEEDED????
// const WorkboxPlugin = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    // OPTIMIZE OUR BUILD FOR A DEVELOPMENT ENVIRONMENT (mode: 'development')
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
      // ARE THE BELOW NEEDED???
      // database: './src/js/database.js',
      // editor: './src/js/editor.js',
      // header: './src/js/header.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // HTML WEBPACK PLUGIN TO CREATE HTML FILES AND ADD THE BUNDLED JS FILES TO THEM
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        // *** IS THIS FILENAME NEEDED????
        // filename: 'index.html',
        title: 'JATE',
      }),
      // INJECT MANIFEST PLUGIN
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),
      // MANIFEST FILE FOR THE APP (ADDS THE ICONS AND OTHER INFO)
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Text editor for the web',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        // *** DISPLAY PROPERTY NEEDED????
        // display: 'standalone',
        fingerprints: false,
        inject: true,

        // ICONS FOR THE APP USING SRC, SIZE, AND DESTINATION
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons')
          }
        ]
      }),
    ],

    // CSS LOADERS AND BABEL TO WEBPACK
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          // USE: BABEL-LOADER, PRESET-ENV, AND PLUGINS
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
