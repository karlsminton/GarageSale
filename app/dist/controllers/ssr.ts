const { serve, file, resolveSync } = Bun

export default class SsrController
{
  #partialDirectory

  #url

  constructor()
  {
    this.#partialDirectory = __dirname + '/../partials/'
  }

  execute(req: Request)
  {
    const urlData = new URL(req.url)
    const params = new URLSearchParams(urlData.search)
    // TODO change back to const after debugging
    let partial = params.get('partial')

    const path = this.#partialDirectory + partial + '.html'
    const content = file(path)
    console.log(content)

    return new Response(content)
  }
}
