const path = require('path')

module.exports = {
  entry: './app/src/scripts/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/app/dist', 'scripts')
  }
}
