import App from './app'
import $ from 'jquery'

$(document).ready(function() {
  let app = new App()

  $('#shutter').click(function() {
    app.onActivation()
  })
})
