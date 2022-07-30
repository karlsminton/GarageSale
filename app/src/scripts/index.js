import Scanner from './scanner'
import $ from 'jquery'

$(document).ready(function() {
  let app = new Scanner()

  $('#btn').click(function() {
    app.onActivation()
  })
})
