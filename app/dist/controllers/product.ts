const { serve, file, resolveSync } = Bun
import { Database } from "bun:sqlite";

export default class ProductController
{
  constructor()
  {
    this.db = Database.open('/Users/karlminton/gits/bunapp/db/app.db')
  }

  execute(req: Request, params: {})
  {
    const sql = this.db.prepare(`SELECT * FROM products`)
    const content = sql.all()
    return new Response(JSON.stringify(content))
  }
}
