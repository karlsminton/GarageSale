const path = require('path')

module.exports = {
  entry: './src/scripts/src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/src/scripts/', 'dist')
  }
}
