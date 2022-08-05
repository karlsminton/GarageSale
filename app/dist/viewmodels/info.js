export default class Info
{
  #product

  getProductDataHtml(data)
  {
    this.#product = json.products[0]
  }

  getRequestErrorHtml(errorMsg)
  {
    return `<div class="message error">${errorMsg}</p>`
  }
}
