import Scanner from './scanner'
import $ from 'jquery'

export default class App {

  scanner

  api_key

  constructor()
  {
    this.scanner = new Scanner(this)
    this.api_key = '5gtcwa2juhzu0g6qqoyw6bgq0sfcia'
    this.updatePage.bind(this)
  }

  onActivation()
  {
    this.scanner.onActivation()
  }

  setResult(result)
  {
    alert('result proper received ya know kid')
    let code = result.code

    // TODO remove this hard set - just for testing
    code = '5060139431507'

    const query = `/scan?barcode=${code}`

    console.log(query)

    let response = ''
    this.queryData(query)
      .then((products) => this.updatePage(products))
  }

  updatePage(json)
  {
    console.log(json)
    const viewport = document.getElementById('interactive')
    $('#interactive').find('video, canvas').remove()

    const img = document.createElement('img')
    img.src = json.products[0].images[0]

    viewport.appendChild(img)
  }

  async queryData(query)
  {
    let result = await fetch(query, { method: "GET" })
    return await result.json()
  }
}
