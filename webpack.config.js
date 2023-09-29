const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
        library: 'lib',
        libraryTarget: 'umd',
        globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
}