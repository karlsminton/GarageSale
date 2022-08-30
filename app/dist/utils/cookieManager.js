export default class CookieManager
{
  #data = {}

  constructor() {}

  // sets cookie value by name
  setCookie(
    name,
    value
  ) {
    document.cookie = `${name}=${value};`
    this.#loadData()
  }

  // gets cookie value by name
  getCookie(name)
  {
    if (!this.#data[name]) {
      this.#loadData()
    }

    return this.#data[name]
  }

  // wraps set cookie with sanitisation for blank / null values
  setJsonToCookie(
    name,
    json
  ) {
    // this confusing line should minify the request - stopping errors when decoding later
    json = JSON.parse(JSON.stringify(json))

    console.log('set json cookie ran')
    json = this.#filterJsonNullAndEmpty(json)

    // this works but still too large
    const value = btoa(unescape(encodeURIComponent(JSON.stringify(json))))
    console.log('encoded json cookie value: ', value)
    this.setCookie(name, value)
  }

  // wraps get cookie to return stored json
  getJsonFromCookie(name)
  {
    value = this.getCookie(name)
    return JSON.parse(atob(value))
  }

  // removes empty values from json for cookie storage
  #filterJsonNullAndEmpty(json)
  {
    Object.keys(json).forEach((key, value) => {
      if (typeof value === 'object') {
        json[key] = this.#filterJsonNullAndEmpty(value)
      }

      if (value === null || typeof value === 'undefined' || value === '') {
        delete json[key]
      }
    })

    return json
  }

  // Sets / Resets data property to have all current cookies accessible by key
  #loadData()
  {
    const cookies = document.cookie.split(';')
    cookies.forEach((cookie) => {
      let keyVal = cookie.split('=')
      this.#data[keyVal[0]] = keyVal[1]
    })
  }
}
