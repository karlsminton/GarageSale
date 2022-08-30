const { serve, file, resolveSync } = Bun

export default class SsrController
{
  execute(req: Request)
  {
    const urlData = new URL(req.url)
    const params = new URLSearchParams(urlData.search)

    const partial = params.get('partial')

    const path =  __dirname + '/../partials/' + partial + '.html'
    const content = file(path)

    return new Response(content)
  }
}
