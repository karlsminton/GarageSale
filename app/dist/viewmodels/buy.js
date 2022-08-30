import $ from 'jquery'

export default class BuyViewmodel
{
  #data = []

  constructor()
  {
    this.queryData('/products').then((data) => this.#data = data)
    this.appendProducts()
  }

  async queryData(query)
  {
    let result = await fetch(query, { method: "GET" })
      .then((res) => res.json())

    return await result
  }

  getData()
  {
    return this.#data
  }

  appendProducts()
  {
    const products = this.getData()
    products.forEach((product) => {
      console.log(product)
      let item = `<div class="product">
        <div class="image" style="background-image: url(${product.image})"></div>
        <p class="name">${product.name}</p>
        <p class="price">${this.formatCurrency(product.price)}</p>
        <a class="btn" href="#products?id=${product.id}">View Product</a>
      </div>`
      $('#product-listing').append(item)
    })
  }

  // TODO update this to manage differences in currency
  formatCurrency(price)
  {
    return '£' + price
  }
}
