const { serve, file, resolveSync } = Bun

export default class BarcodeController
{
  constructor() {}

  execute(req: Request, params: {})
  {
    let content = 'not assigned'
    const base = 'https://api.barcodelookup.com/v3/products'

    const key = '5gtcwa2juhzu0g6qqoyw6bgq0sfcia'
    const barcode = params['barcode']

    const url = `${base}?barcode=${barcode}&formatted=y&key=${key}`
    
    const opts = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      }
    }

    // Shows in "bun run" the full url to double check
    console.log(url)
    return this.getJson(url, opts)
  }

  getJson(url, opts)
  {
    return fetch(url, opts)
  }
}
