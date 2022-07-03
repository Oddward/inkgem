import nc from 'next-connect'
import authors from '../../../data/authors'

const getauthor = id => authors.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    
    const author = getauthor(req.query.id)

    if (!author) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: author})
  })
  .patch((req, res) => {
    const author = getauthor(req.query.id)

    if (!author) {
      res.status(404)
      res.end()
      return
    }
    
    const i = authors.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...author, ...req.body}

    authors[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const author = getauthor(req.query.id)

    if (!author) {
      res.status(404)
      res.end()
      return
    }
    const i = authors.findIndex(n => n.id === parseInt(req.query.id))
    
    authors.splice(i, 1)

    res.json({data: req.query.id})
  })
  

export default handler