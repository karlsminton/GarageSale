import App from './app'
import $ from 'jquery'

$(document).ready(function() {
  let app = new App()

  $('#btn').click(function() {
    app.onActivation()
  })
})
