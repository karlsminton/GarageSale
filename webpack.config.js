const path = require('path')

module.exports = {
  entry: './app/scripts/src/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/app/scripts/', 'dist')
  }
}
