import App from './app'
import $ from 'jquery'

$(document).ready(function() {
  window.app = new App()

  $('#shutter').click(function() {
    window.app.onActivation()
  })
})
