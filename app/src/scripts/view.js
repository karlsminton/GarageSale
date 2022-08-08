import $ from 'jquery'
import MessageManager from '../../dist/utils/messageManager'
import Info from '../../dist/viewmodels/info'

export default class View
{
  messagesUtil

  constructor()
  {
    this.updatePage.bind(this)
    this.scannerReset.bind(this)
    this.addResetButton.bind(this)
    this.messagesUtil = new MessageManager()
    this.viewmodel = new Info()
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
    const viewport = document.getElementById('interactive')

    this.displayMessage(200)

    $('#interactive').find('video, canvas, br').remove()

    const img = document.createElement('img')
    img.src = json.products[0].images[0]
    viewport.appendChild(img)
    this.addResetButton()

    this.addSellButton()
    const details = document.getElementById('details')
    details.innerHTML = this.viewmodel.getProductDataHtml(json.products[0])
  }

  addResetButton()
  {
    // TODO fix - adds multiple buttons after first go
    if (!document.getElementById('retry')) {
      const btn = document.createElement('button')
      btn.id = 'retry'
      btn.innerHTML = 'Retry?'
      btn.addEventListener('click', function (){ app.scannerReset(false) })
      document.getElementById('main').appendChild(btn)
    } else {
      $('#retry').removeClass('hidden')
    }
  }

  addSellButton()
  {
    // TODO fix - adds multiple buttons after first go
    if (!document.getElementById('sell')) {
      const btn = document.createElement('button')
      btn.id = 'sell'
      btn.innerHTML = 'Sell This Product'
      btn.addEventListener('click', function (){
        // something to initialise sale
        alert('Sell Button Clicked')
      })
      document.getElementById('main').appendChild(btn)
    }
  }

  handleApiError(error)
  {
    const response = error.response
    const status = response.status ?? 404
    this.displayMessage(response.status)
    this.addResetButton()
  }

  displayMessage(status)
  {
    return this.messagesUtil.createMsgByHttpCode(status)
  }
}
