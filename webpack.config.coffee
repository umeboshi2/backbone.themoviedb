path = require 'path'

webpack = require 'webpack'
nodeExternals = require 'webpack-node-externals'

BuildEnvironment = process.env.NODE_ENV or 'development'
if BuildEnvironment not in ['development', 'production']
  throw new Error "Undefined environment #{BuildEnvironment}"

# set output filenames
WebPackOutputFilename =
  development: 'backbone.themoviedb.js'
  production: 'backbone.themoviedb.min.js'

# path to build directory
localBuildDir =
  development: "dist"
  production: "dist"

WebPackOutput =
  filename: WebPackOutputFilename[BuildEnvironment]
  #path: path.resolve 'build'
  library: 'Backbone.Themoviedb'
  libraryTarget: 'umd'

coffeeLoaderRule =
  test: /\.coffee$/
  use: ['coffee-loader']

common_plugins = []
extraPlugins = []
WebPackOptimization = {}

if BuildEnvironment is 'production'
  UglifyJsPlugin = require 'uglifyjs-webpack-plugin'
  WebPackOptimization.minimizer = [
    new UglifyJsPlugin()
    ]
AllPlugins = common_plugins.concat extraPlugins


WebPackConfig =
  mode: BuildEnvironment
  optimization: WebPackOptimization
  entry:
    app: ['./src/index.coffee']
  output: WebPackOutput
  plugins: AllPlugins
  externals: [nodeExternals()]
  module:
    rules: [
      coffeeLoaderRule
    ]
  resolve:
    extensions: [".wasm", ".mjs", ".js", ".json", ".coffee"]
  stats:
    colors: true
    modules: false
    chunks: true
    #maxModules: 9999
    #reasons: true


if BuildEnvironment is 'development'
  WebPackConfig.devtool = 'source-map'
      
module.exports = WebPackConfig
