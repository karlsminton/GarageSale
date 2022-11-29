import $ from 'jquery'
import CookieManager from '../utils/cookieManager'
import AbstractViewmodel from './abstract'

export default class SellViewmodel extends AbstractViewmodel
{
  #data

  constructor()
  {
    super()
    const cookieManager = new CookieManager()
    // TODO this is going to get boring - need a cookie manager
    // const cookies = document.cookie.split(';')
    //
    // cookies.forEach((cookie) => {
    // 	let keyValue = cookie.split('=')
    //
    // 	if (keyValue[0] == 'product') {
    //     console.log(keyValue[0])
    //     console.log(JSON.stringify(keyValue[1]))
    // 		this.#data = JSON.parse(keyValue[1])
    //   }
    // })
    this.#data = cookieManager.getCookie('product')
    document.getElementById('product-image').innerHTML = this.getImage()
  }

  getImage()
  {
    const src = this.#data.products[0].images[0]
    return `<img src="${src}"/>`
  }
}
