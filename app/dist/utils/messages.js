export default class Messages
{
  getMsgByHttpErrorCode(code)
  {
    let msg
    switch (code) {
      case 404:
        msg = "We can't seem to find that product, feel free to try again."
        break;
      case 403:
        msg = "You're not allowed to complete this action. Please contact us if you think something has gone wrong."
        break;
      case 429:
        msg = "Oops, we've exceeded the number of requests we can process. Please try again later."
        break;
      default:
        msg = "An unknown error has occurred, please try again."
    }
    return msg
  }
}
