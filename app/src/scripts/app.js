import Scanner from './scanner'
import $ from 'jquery'

export default class App {

  scanner

  api_key

  constructor()
  {
    this.scanner = new Scanner(this)
    this.api_key = '5gtcwa2juhzu0g6qqoyw6bgq0sfcia'
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

    let response

    fetch(
      query,
      { method: "GET" }
    ).then((res) => {
      // res.json()
      response = res
    }).then((json) => console.log(json))

    console.log(response)
  }
}
