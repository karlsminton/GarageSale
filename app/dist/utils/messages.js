export default class Messages
{
  getMsgByHttpCode(code)
  {
    const messageResultObject = {msg: '', type: 'error'}

    let msg
    switch (code) {
      case 200:
        messageResultObject.msg = 'We\'ve found your product. Take a look.'
        messageResultObject.type = 'success'
        break;
      case 404:
        messageResultObject.msg = "We can't seem to find that product, feel free to try again."
        break;
      case 403:
        messageResultObject.msg = "You're not allowed to complete this action."
        messageResultObject.type = 'info'
        break;
      case 429:
        messageResultObject.msg = "Oops, we've exceeded the number of requests we can process. Please try again later."
        break;
      default:
        console.log('Unexpected error code: ', code)
        msg = "An unknown error has occurred, please try again."
    }
    return messageResultObject
  }
}
