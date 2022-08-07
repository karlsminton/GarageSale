import $ from 'jquery'
import Messages from '../../dist/utils/messages'
import Info from '../../dist/viewmodels/info'

export default class View
{
  messagesUtil

  constructor()
  {
    this.updatePage.bind(this)
    this.scannerReset.bind(this)
    this.addResetButton.bind(this)
    this.messagesUtil = new Messages()
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

    $('#interactive').find('video, canvas, br').remove()

    const img = document.createElement('img')
    img.src = json.products[0].images[0]
    viewport.appendChild(img)
    this.addResetButton()

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

  handleApiError(error)
  {
    // Debug
    const response = error.response
    console.log('handleApiError response: ', response)
    const code = this.messagesUtil.getMsgByHttpErrorCode(status)
    const html = this.viewmodel.getRequestErrorHtml(code)
    document.getElementById('messages').innerHTML = html
    this.addResetButton()
  }
}
