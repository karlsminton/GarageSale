import { Scanner } from './scanner.js'

var results = []

(function() {
  document.getElementById('btn').addEventListener('click', function(){
    Scanner.detected(result => {
      results.concat([result])
    })
  })
})()
