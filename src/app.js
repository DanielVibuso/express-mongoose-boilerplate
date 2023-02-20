import express from "express"; //importa o módulo do express para nosso app.js
import db from './config/dbConnect.js'
import livros from "./models/Livro.js"
import routesIndex from "./routes/index.js"


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão com o banco feita com success")
})

const app = express(); //inicializa um objeto do módulo importado express
app.use(express.json()) // seta para o objeto usar o express.json(), mas o que é isso?

routesIndex(app);

//declarando um array de jsons onde cada  1 é um livro
/*let livros = [ 
    {codigo: 1, titulo: "Senhor dos aneis"},
    {codigo: 2, titulo: "harry potter"}
];*/

/*
//informa ao express pra criar uma rota do tipo GET para /, e o que deve retornar.
app.get('/', (_, res)=>{
    res.status(200).send('curso de node')
})

//informa ao express pra criar uma rota do tipo GET para /livros e que deve retornar status 200 e o json de livros.


app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json(livros)
})

app.put('/livros/:id', (req, res) => {
    console.log(req.body)
    let index = livros.findIndex(livro => livro.codigo == req.params.id)
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    console.log(req.params.id)
    livros = livros.filter(arr => arr.codigo != req.params.id)
    console.log(livros)
    res.status(201).json(livros)
})*/

export default app  //informa que iremo exportar app, para usá-lo como módulo em outra página/arquivo js