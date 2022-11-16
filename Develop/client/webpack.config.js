const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      database: './src/js/database.js',
      editor: './src/js/editor.js',
      header: './src/js/header.js',
      home: './src/js/home.js',
      // login: './src/js/login.js',
      // post: './src/js/post.js',
      // profile: './src/js/profile.js',
      // register: './src/js/register.js',
      // search: './src/js/search.js',
      // settings: './src/js/settings.js',
      // sw: './src-sw.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        // title:
      }),
      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'JATE',
        description: 'Text editor for the web',
        // BACKGROUND HEX COLOR FOR THE APP (GREEN)
        background_color: '##00FF00',
        // RGB THEME COLOR FOR THE APP (WHITE)
        theme_color: '#ffffff',
        'theme-color': '#ffffff',
        start_url: '/',
        display: 'standalone',
        fingerprints: false,
        // ***** inject: true, ??? OR false???
        inject: false,
        // ICONS FOR THE APP USING SRC, SIZE, AND DESTINATION
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons')
          }
        ]
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'

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
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
              // **** PLUGINS NEEDED??? IF SO MAKE SURE THESE ARE RIGHT
              // plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
