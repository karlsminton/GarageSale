import $ from 'jquery'
import App from './app'
import IndexViewmodel from '../../dist/viewmodels/index'
import SellViewmodel from '../../dist/viewmodels/sell'
import ListViewmodel from '../../dist/viewmodels/list'

export default class Router
{
  #viewmodels = {}

  constructor()
  {
    window.addEventListener('hashchange', (e) => {
      this.routerCallback()
    });

    window.addEventListener('load', (e) => {
      console.log('page has loaded')
      if (window.location.hash != '') {
        this.routerCallback()
      }
      window.location.href = this.getUrl('#index')
    })

    const callback = (nodes, observer) => {
      if (nodes.length > 0) {
        $('#shutter').click(function() {
          console.log('Re-inited the shutter button')
          window.app = new App()
          window.app.onActivation()
        })
      }
    }
    const observer = new MutationObserver(callback)
    observer.observe(document.getElementById('main'), {childList: true})

    this.#viewmodels = {
      "index": IndexViewmodel,
      "sell": SellViewmodel,
      "list": ListViewmodel,
    }
  }

  routerCallback()
  {
    const slug = window.location.hash.replace('#', '')
    let url = new URL(this.getUrl('ssr'))
    url.search = new URLSearchParams({"partial": slug})

    fetch(url, { method: "GET" })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('URL does not exist')
        }
        return res.text()
      }).then((content) => {
        // Reset html to blank
        document.getElementById('main').innerHTML = ''
        // Runs scripts included in html
        $('#main').append(content)

        // Implement viewmodels on page load
        if (this.#viewmodels[slug]) {
          window.viewmodel = new this.#viewmodels[slug]
          window.viewmodel.afterLoad()
        } else {
          alert('viewmodel doesn\'t exist for this route')
        }
      })
      .catch((e) => {
        console.log('Router error occurred: ', e)
        window.location.hash = '404'
      })
  }

  getBaseUrl()
  {
    return `${window.location.protocol}//${window.location.host}`
  }

  getUrl(slug)
  {
    return `${this.getBaseUrl()}/${slug}`
  }
}
