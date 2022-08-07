export default class Info
{
  #product

  getProductDataHtml(product)
  {
    this.#product = product
    const title = product.title ?? ''
    const desc = product.description ?? ''
    const stores = product.stores ?? []

    let responseHtml = `<h2>${title}</h2><div class="desc"><p>${desc}</p></div>`

    if (stores.length === 0) {
      return responseHtml
    }

    let storesHtml = ''
    stores.forEach((store) => {
      let condition = store.condition !== '' ? store.condition : 'new'
      storesHtml += `<li>
        <a href="${store.link}" target="_blank">${store.name}</a>
        selling ${condition} at <b>${store.currency_symbol}${store.price}</b> - <i>last checked at ${store.last_update}</i>
      </li>`
    })

    const storesDataWrapper = `<div id="stores">
      <div class="heading">
          <p>This product is currently being sold new at the following prices</p>
      </div>
      <div class="content"><ul>${storesHtml}</ul></div>
    </div>`

    return responseHtml += storesDataWrapper
  }

  getRequestErrorHtml(errorMsg)
  {
    const onload = `(function() {console.log('message:', this)})`
    return `<div onload="${onload}" class="message error">${errorMsg}</div>`
  }
}
