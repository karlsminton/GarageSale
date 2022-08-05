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
    // this.handleApiError.bind(this)
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
    console.log(json)
    const viewport = document.getElementById('interactive')

    $('#interactive').find('video, canvas, br').remove()

    const img = document.createElement('img')
    img.src = json.products[0].images[0]

    viewport.appendChild(img)
    this.addResetButton()
  }

  addResetButton()
  {
    const btn = document.createElement('button')
    btn.innerHTML = 'Retry?'
    btn.addEventListener('click', function () {
      app.scannerReset(false)
    })

    document.getElementById('main').appendChild(btn)
  }

  handleApiError(error)
  {
    const response = error.response
    const code = this.messagesUtil.getMsgByHttpErrorCode(response.status)
    const html = this.viewmodel.getRequestErrorHtml(code)
    document.getElementById('messages').innerHTML = html
  }
}
