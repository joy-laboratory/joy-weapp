const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['./docs/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('docs')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      // loader: 'babel-loader',
      loader: 'happypack/loader', // 增加新的HappyPack构建loader
      include: [resolve('src')],
      exclude: /node_modules/,
      options: {
        sourceMap: true,
        // babelrc: true, 
        cacheDirectory: true 
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },{
      test: /\.md$/,
      loaders: [
        'vue-loader',
        {
          loader: 'vue-md-loader',
          options: {
            preProcess (source) {
              // console.log('pre', source)
              return source
            },
            afterProcess (result) {
              // console.log('after', result)
              return result
            },
            afterProcessLiveTemplate (template) {
              return `<div class="live-wrapper">${template}</div>`
            },
            rules: {
              'table_open': () => '<div class="table-responsive"><table class="table">',
              'table_close': () => '</table></div>'
            },
            plugins: [
              [
                require('markdown-it-anchor'),
                {
                  permalink: true,
                  permalinkSymbol: '&#128279;'
                }
              ]
            ]
          }
        }
      ]
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    publicPath: '/',
    historyApiFallback: true
  }
}
