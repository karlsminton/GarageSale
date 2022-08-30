const { serve, file, resolveSync } = Bun
import BarcodeController from './controllers/barcode.ts'
import SsrController from './controllers/ssr.ts'

const BASE_DIR = __dirname
const BASE_URL = 'http://localhost:3000'

let relativePathFromUrl = (url) => { return url.replace(BASE_URL, '') }
let absolutePathFromRelative = (url) => { return BASE_DIR + url }

const barcodeController = new BarcodeController()
const ssrController = new SsrController()
const controllers = {
  "/scan": barcodeController,
  "/ssr": ssrController,
}

/*
 * TODO break this down into utility classes / functions
 */
serve({
  fetch(req: Request) {
    let content
    let path = relativePathFromUrl(req.url)

    // TODO fix this absolute mess
    let params = {}
    let paramString = path.match(/(\?[a-zA-Z0-9\=\&]+)/g)
    if (paramString !== null) {
      paramString = paramString[0]
      path = path.replace(paramString, '')
      let urlSearchParams = new URLSearchParams(paramString)

      for (const key of urlSearchParams.keys()) {
        params[key] = urlSearchParams.get(key)
      }
    }

    // Return controller responses
    if (controllers[path]) {
      return controllers[path].execute(req, params)
    }
    // Return static files
    else {
      if (path === '/') {
        path = '/index.html'
      }

      content = file(absolutePathFromRelative(path))

      var data = {
        'url': req.url,
        'path': path,
        'content': '' + content
      }
    }

    return new Response(content)
  },

  port: 3000,
  hostname: 'localhost'
})
