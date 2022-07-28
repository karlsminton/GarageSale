const path = require('path')

module.exports = {
  entry: './src/scripts/src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}
