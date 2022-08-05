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
    const status = this.scanner.getCameraStatus()
    this.view.scannerReset(status)
  }

  setResult(result)
  {
    const code = result.code
    const query = `/scan?barcode=${code}`

    console.log(query)

    let response = ''
    this.queryData(query)
      .then((res) => {
        if (res.status !== 200) {
          let error = new Error(`API returned a status of ${res.status}`)
          error.response = res
          throw error
        }
        res.json
      })
      .then((products) => this.view.updatePage(products))
      .catch((error) => {
        this.view.handleApiError(error)
      })
  }

  scannerReset()
  {
    alert('scanner reset yo')
    const status = this.scanner.getCameraStatus()
    this.view.scannerReset(status)
  }

  async queryData(query)
  {
    let result = await fetch(query, { method: "GET" })
    return await result
  }
}
