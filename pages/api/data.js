import nc from 'next-connect'
import cors from 'cors'

const handler = nc()
    .use( cors() )
    .get(( req, res ) => {
        res.send( '' )
    })
    .post(( req, res ) => {
        res.json({})
    })
    .put(async ( req, res ) => {
        res.end( '' )
    })

export default handler