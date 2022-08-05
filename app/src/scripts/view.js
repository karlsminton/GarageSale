import $ from 'jquery'

export default class View
{
  constructor()
  {
    this.updatePage.bind(this)
  }

  scannerReset()
  {
    $('#interactive').find('img').remove()
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

  // addShutter()
  // {
  //   const viewport = document.getElementById('interactive')
  // }
}
