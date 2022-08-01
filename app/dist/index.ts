const { serve, file, resolveSync } = Bun

const BASE_DIR = __dirname
const BASE_URL = 'http://localhost:3000'

let relativePathFromUrl = (url) => {
  return url.replace(BASE_URL, '')
}

let absolutePathFromRelative = (url) => {
  return BASE_DIR + url
}

serve({
  fetch(req: Request) {
    var path = relativePathFromUrl(req.url)
    if (path === '/') {
      path = '/index.html'
    }

    var content = file(absolutePathFromRelative(path))

    var data = {
      'url': req.url,
      'path': path,
      'content': '' + content
    }

    return new Response(content)
  },

  port: 3000,
  hostname: 'localhost'
})
