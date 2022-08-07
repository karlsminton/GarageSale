import $ from 'jquery'

export default class MessageManager
{
  #validMessageTypes = ['success', 'error', 'info']

  _instance

  #knownMessages = []

  constructor()
  {
    if (MessageManager._instance) {
      return MessageManager._instance
    }
    MessageManager._instance = this;
  }

  createMessage(msg, type)
  {
    if (!this.#validMessageTypes.includes(type)) {
      throw new Error('Instantiated message was not a valid type')
    }
    const messageNode = `<div class="message ${type}">${msg}</div>`

    $('#messages').append(messageNode)
  }

  createMsgByHttpCode(code)
  {
    let msg,
    type = 'error'
    switch (code) {
      case 200:
        msg = 'We\'ve found your product. Take a look.'
        type = 'success'
        break;
      case 404:
        msg = "We can't seem to find that product, feel free to try again."
        break;
      case 403:
        msg = "You're not allowed to complete this action."
        type = 'info'
        break;
      case 429:
        msg = "Oops, we've exceeded the number of requests we can process. Please try again later."
        break;
      default:
        console.log('Unexpected error code: ', code)
        msg = "An unknown error has occurred, please try again."
    }
    return this.createMessage(msg, type)
  }

  initialiseManager()
  {
    const target = document.getElementById('messages')

    // callback could possibly be private method
    const callback = (mutations, observer) => {
      const messages = mutations.filter((mut) => {return mut.type === 'childList'})
      for (const msg of messages) {
        console.log('Observer logging of message', msg)
      }
    }

    const observer = new MutationObserver(callback)
    observer(target, {})
  }
}
