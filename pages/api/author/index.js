import nc from 'next-connect'
import authors from '../../../data/authors'

const handler = nc()
  .get(( req, res ) => {
    res.json({ data: authors })
  })
  .post((req, res) => {
    const id = Date.now()
    const author = { ...req.body, id }

    notes.push( note )
    res.json({ data: note })
  })
export default handler