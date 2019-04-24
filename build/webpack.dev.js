const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    mode:process.env.NODE_ENV,
    entry: {//入口文件
      index:"./examples/play.js",
    },
    output:{
      path:path.join(__dirname, '../examples/dist'),
      publicPath:'/',
      chunkFilename:'async_[name].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: config.alias,
      modules: ['node_modules']
    },
    stats:{
      children: false
    },
    devServer: {
        open: true,
        host:'localhost',
        port:8085,
        publicPath:'/',
        noInfo:true
    },
    module:{
        rules: [
            {
              test: /\.(jsx?|babel|es6)$/,
              include: process.cwd(),
              exclude: config.jsexclude,
              loader: 'babel-loader'
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace:false
                }
              }
            },
            {
              test: /\.(scss|css)$/,
              use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            {
              test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
              loader: 'url-loader',
              // todo: 这种写法有待调整
              query: {
                limit: 10000,
                name: path.posix.join('static', '[name].[hash:7].[ext]')
              }
            }
          ]
    },
    plugins: [ //webpack 通过 plugins 实现各种功能, 比如 html-webpack-plugin 使用模版生成 html 文件
      new HtmlWebpackPlugin({
        template: './examples/index.tpl',
        filename: './index.html',
        inject: true
      }),
      new ProgressBarPlugin(),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
      }),
      new webpack.LoaderOptionsPlugin({
        vue: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      })
    ],
    optimization:{
       minimizer:[]
    }
};
if (isProd) {
  webpackConfig.externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'highlight.js': 'hljs'
  };
  webpackConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
  );
  webpackConfig.optimization.minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }),
    new OptimizeCSSAssetsPlugin({})
  );
  webpackConfig.devtool = false;
}