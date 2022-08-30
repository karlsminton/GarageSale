import Scanner from './scanner'
import View from './view'
import Router from './router'
// import CookieManager from '../../dist/utils/cookieManager'
import $ from 'jquery'

export default class App
{
  constructor()
  {
    this.scanner = new Scanner(this)
    this.view = new View()
    this.router = new Router()
    // this.cookieManager = new CookieManager()
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

    let str = ''
    // TODO make a cache management class?
    if (window.caches) {
      window.caches.open('scans')
        .then((cache) => { str = cache.match(query) })
    }
    if (str === '' || typeof str === 'undefined') {
      str = `{
          "products": [
              {
                  "barcode_number": "9780140157376",
                  "barcode_formats": "ISBN-10 0140157379, ISBN-13 9780140157376",
                  "mpn": "9780140157376",
                  "model": "",
                  "asin": "",
                  "title": "Haroun and the Sea of Stories by Salman Rushdie",
                  "category": "Media > Books",
                  "manufacturer": "Penguin Books",
                  "brand": "Penguin Books",
                  "contributors": [
                      {
                          "role": "author",
                          "name": "Rushdie, Salman"
                      },
                      {
                          "role": "publisher",
                          "name": "Penguin Books"
                      }
                  ],
                  "age_group": "adult",
                  "ingredients": "",
                  "nutrition_facts": "",
                  "energy_efficiency_class": "",
                  "color": "",
                  "gender": "",
                  "material": "",
                  "pattern": "",
                  "format": "EBook",
                  "multipack": "",
                  "size": "",
                  "length": "",
                  "width": "",
                  "height": "",
                  "weight": "0.4",
                  "release_date": "",
                  "description": "The author of The Satanic Verses returns with his most humorous and accessible novel yet. This is the story of Haroun, a 12-year-old boy whose father Rashid is the greatest storyteller in a city so sad that it has forgotten its name. When the gift of gab suddenly deserts Rashid, Haroun sets out on an adventure to rescue his print.",
                  "features": [],
                  "images": [
                      "https://images.barcodelookup.com/134/1342375-1.jpg"
                  ],
                  "last_update": "2022-08-05 06:09:13",
                  "stores": [
                      {
                          "name": "Kidsbooks.com (US)",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "4.49",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://kidsbooks.com/Store/Details/9780140157376B",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2022-04-07 21:18:29"
                      },
                      {
                          "name": "BetterWorld.com - New, Used, Rare Books & Textbooks",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "4.46",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.betterworldbooks.com/product/detail/9780140157376?shipto=US&curcode=USD&utm_source=CJ_feed",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "used",
                          "shipping": [],
                          "last_update": "2022-08-05 06:09:13"
                      },
                      {
                          "name": "ThriftBooks.com",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "3.79",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.thriftbooks.com/w/haroun-and-the-sea-of-stories_salman-rushdie/254624/#isbn=0140157379",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 06:35:37"
                      },
                      {
                          "name": "BookOutlet (US)",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "5.49",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://bookoutlet.com/Store/Details/9780140157376B",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 07:24:40"
                      },
                      {
                          "name": "eCampus.com",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "5.10",
                          "sale_price": "",
                          "tax": [],
                          "link": "http://www.ecampus.com/bk_detail.asp?isbn=9780140157376&referrer=CJ",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-08-02 16:28:43"
                      },
                      {
                          "name": "iFlipd",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "5.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.iflipd.com/books/9780140157376",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 07:06:21"
                      },
                      {
                          "name": "BookOutlet (Canada)",
                          "country": "CA",
                          "currency": "CAD",
                          "currency_symbol": "$",
                          "price": "8.79",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://bookoutlet.ca/Store/Details/9780140157376B",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2022-04-06 10:16:08"
                      },
                      {
                          "name": "Knetbooks.com",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "10.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "http://www.knetbooks.com/search-results?terms=9780140157376&referrer=KBCJ",
                          "item_group_id": "",
                          "availability": "in stock",
                          "condition": "new",
                          "shipping": [
                              {
                                  "country": "",
                                  "region": "",
                                  "service": "",
                                  "price": "0.00 USD"
                              }
                          ],
                          "last_update": "2022-07-19 18:13:16"
                      },
                      {
                          "name": "OnBuy.com",
                          "country": "GB",
                          "currency": "GBP",
                          "currency_symbol": "£",
                          "price": "10.17",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.onbuy.com/gb/general-fiction/haroun-and-the-sea-of-stories~c2680~p1440809/?exta=cjunct&stat=eyJpcCI6IjEwLjE3IiwiZHAiOjAsImxpZCI6IjI0ODY4ODAzIiwicyI6IjExIiwidCI6MTU4MTg3MjgxNCwiYm1jIjowfQ==",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 07:46:06"
                      },
                      {
                          "name": "BiggerBooks.com",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "11.99",
                          "sale_price": "",
                          "tax": [],
                          "link": "http://www.biggerbooks.com/bk_detail.asp?isbn=9780140157376&referrer=BBCJ",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "used",
                          "shipping": [],
                          "last_update": "2022-08-04 20:50:08"
                      },
                      {
                          "name": "Walmart",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "13.44",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.walmart.com/ip/Haroun-and-the-Sea-of-Stories-Paperback-9780140157376/518868&intsrc=CATF_9781",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "used",
                          "shipping": [],
                          "last_update": "2022-06-19 23:43:03"
                      },
                      {
                          "name": "Rakuten.com",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "13.50",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.rakuten.com/shop/bookshopeeus/product/BSNW9780140157376/?sku=BSNW9780140157376&scid=af_feed",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 06:36:15"
                      },
                      {
                          "name": "Wordery (US)",
                          "country": "GB",
                          "currency": "GBP",
                          "currency_symbol": "£",
                          "price": "12.95",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://wordery.com/haroun-and-the-sea-of-stories-salman-rushdie-9780140157376",
                          "item_group_id": "",
                          "availability": "in stock",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-04-24 05:27:24"
                      },
                      {
                          "name": "AbeBooks",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "15.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.abebooks.com/Haroun-Sea-Stories-Rushdie-Salman-Penguin/30838961587/bd&intsrc=CATF_8955",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "used",
                          "shipping": [],
                          "last_update": "2022-06-01 11:23:43"
                      },
                      {
                          "name": "Barnes & Noble",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "14.40",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.barnesandnoble.com/w/haroun-and-the-sea-of-stories-salman-rushdie/1101818684?ean=9780140157376",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 07:08:29"
                      },
                      {
                          "name": "Thalia DE",
                          "country": "EU",
                          "currency": "EUR",
                          "currency_symbol": "€",
                          "price": "14.49",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.thalia.de/shop/home/artikeldetails/ID3288653.html?gkredf=MjAyMDExMjQwMw",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2021-06-22 09:18:42"
                      },
                      {
                          "name": "The Book Depository",
                          "country": "GB",
                          "currency": "GBP",
                          "currency_symbol": "£",
                          "price": "14.26",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.bookdepository.com/Haroun-and-the-Sea-of-Stories-Salman-Rushdie/9780140157376?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=UK&utm_content=Haroun-and-the-Sea-of-Stories&selectCurrency=GBP&w=AFC7AU99Z3LGZRA8VTQ4",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-07-16 09:39:41"
                      },
                      {
                          "name": "Textbooks.com",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "16.00",
                          "sale_price": "16.00",
                          "tax": [],
                          "link": "https://www.textbooks.com/Haroun-and-the-Sea-of-Stories-90-Edition/9780140157376/Salman-Rushdie.php",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "",
                          "shipping": [],
                          "last_update": "2022-08-04 03:06:11"
                      },
                      {
                          "name": "VitalSource",
                          "country": "AU",
                          "currency": "AUD",
                          "currency_symbol": "$",
                          "price": "16.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.vitalsource.com/products/haroun-and-the-sea-of-stories-salman-rushdie-v9781623730130?duration=perpetual",
                          "item_group_id": "",
                          "availability": "in stock",
                          "condition": "new",
                          "shipping": [
                              {
                                  "country": "US",
                                  "region": "",
                                  "service": "digital download",
                                  "price": "0.00 USD"
                              }
                          ],
                          "last_update": "2022-07-23 07:05:14"
                      },
                      {
                          "name": "Target",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "15.49",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.target.com/p/haroun-and-the-sea-of-stories-by-salman-rushdie-paperback/-/A-11712838&intsrc=CATF_1444",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-06-03 15:44:59"
                      },
                      {
                          "name": "BOOKSAMILLION.COM",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "17.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.booksamillion.com/p/Haroun-Sea-Stories/Salman-Rushdie/9780140157376",
                          "item_group_id": "",
                          "availability": "in stock",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-07-17 23:38:34"
                      },
                      {
                          "name": "The Book Depository (US)",
                          "country": "US",
                          "currency": "USD",
                          "currency_symbol": "$",
                          "price": "17.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.bookdepository.com/Haroun-and-the-Sea-of-Stories-Salman-Rushdie/9780140157376?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=US&utm_content=Haroun-and-the-Sea-of-Stories&selectCurrency=USD&w=AFCCAU99Z3LGZRA8VT1N",
                          "item_group_id": "",
                          "availability": "in stock",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-07-16 09:30:13"
                      },
                      {
                          "name": "hugendubel DE",
                          "country": "EU",
                          "currency": "EUR",
                          "currency_symbol": "€",
                          "price": "18.49",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.hugendubel.de/de/taschenbuch/salman_rushdie-haroun_and_the_sea_of_stories-1676844-produkt-details.html?utm_source=zxp&utm_medium=pdm&utm_campaign=pd",
                          "item_group_id": "",
                          "availability": "in stock",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-04-24 11:36:11"
                      },
                      {
                          "name": "Indigo Books & Music",
                          "country": "CA",
                          "currency": "CAD",
                          "currency_symbol": "$",
                          "price": "23.00",
                          "sale_price": "",
                          "tax": [],
                          "link": "https://www.chapters.indigo.ca/en-ca/books/product/9780140157376-item.html",
                          "item_group_id": "",
                          "availability": "",
                          "condition": "new",
                          "shipping": [],
                          "last_update": "2022-04-03 06:27:47"
                      }
                  ],
                  "reviews": []
              }
          ]
      }`

      // this.cookieManager.setJsonToCookie('product', JSON.parse(str))

      // this.queryData(query)
      //   .then((res) => {
      //     if (res.status !== 200) {
      //       console.log('Fetch request didn\'t return a 200 response: ', res)
      //       let error = new Error(`API returned a status of ${res.status}`)
      //       error.response = res
      //       throw error
      //       return
      //     }
      //     console.log('200 response from fetch request: ', res)
      //     res.json()
      //   })
      //   .then((products) => {
      //     console.log('Then ', products)
      //     this.view.updatePage(products)
      //   })
      //   .catch((error) => {
      //     this.view.handleApiError(error)
      //   })

      if (window.caches) {
        window.caches.open('scans')
          .then((cache) => { cache.add(query) })
      }
    }
    this.view.updatePage(str)
  }

  scannerReset()
  {
    const status = this.scanner.getCameraStatus()
    console.log('scanner status currently ', status)
    this.view.scannerReset(status)
    $('#retry').addClass('hidden')
  }

  loadSalePage()
  {
    alert('sale page loaded')
  }

  async queryData(query)
  {
    // Just return json for testing - then re-enable the below code to debug live
    let result = await fetch(query, { method: "GET" })
    return await result
  }
}
