import Scanner from './scanner'
import View from './view'
import $ from 'jquery'

export default class App {

  scanner
  api_key

  constructor()
  {
    this.scanner = new Scanner(this)
    this.view = new View()
    this.api_key = '5gtcwa2juhzu0g6qqoyw6bgq0sfcia'
  }

  onActivation()
  {
    this.scanner.onActivation()
    this.view.scannerReset()
  }

  setResult(result)
  {
    const code = result.code
    const query = `/scan?barcode=${code}`

    console.log(query)

    let response = ''
    this.queryData(query)
      .then((products) => this.view.updatePage(products))
  }

  async queryData(query)
  {
    let result = await fetch(query, { method: "GET" })
    return await result.json()
  }
}
