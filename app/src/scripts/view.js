import $ from 'jquery'

export default class View
{
  constructor()
  {
    this.updatePage.bind(this)
  }

  scannerReset(status)
  {
    $('#interactive').find('img').remove()
    if (status) {
      $('#shutter').addClass('shut')
    } else {
      $('#shutter').removeClass('shut')
    }
  }

  updatePage(json)
  {
    console.log(json)
    const viewport = document.getElementById('interactive')

    $('#interactive').find('video, canvas, br').remove()

    const img = document.createElement('img')
    img.src = json.products[0].images[0]

    viewport.appendChild(img)
  }
}
