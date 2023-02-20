import app from './src/app.js';  //importando o arquivo objeto app do arquivo app.js, onde configuramos nosso express rotas.
//const http = require("http")

const port = process.env.PORT || 3000  //informando a porta onde o express irá operar
/*
const routes = {
    '/' : 'Pagina inicial',
    '/livros': "Aqui cc pagina de livros",
    '/autores': "Aqui é  apagina de autores"
}
const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end(routes[req.url])
})*/

//informando o express para ouvir na porta citada acima e responder com o console.
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})