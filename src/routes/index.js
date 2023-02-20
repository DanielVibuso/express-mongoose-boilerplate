import  express  from "express"
import livrosRoutes from "./livrosRoutes.js"
import autorRoutes from "./autoresRoutes.js"
//import app from "../app.js"

const routes = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send('curso de node')
    })


    app.use(
        express.json(),
        livrosRoutes,
        autorRoutes
    )
}

export default routes;