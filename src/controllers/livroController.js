import livros from "../models/Livro.js";

class LivroController {
     static listarLivros(req, res) {
        livros.find((err, livros)=>{
            console.log(err)
            res.status(200).json(livros);
        })
    }

    static listarLivroPorId(req, res) {
        let livro = livros.findById(req.params.id, function (err, livro) {
            if(!err) {
                res.status(200).json(livro)
                return
            }

            res.status(500).json(`erro ao caçar livro: ${err}`)

        });
    }
    

    static cadastrarLivro(req, res) {
        let livro = new livros(req.body) 
        livro.save((err)=>{
            if(err){ 
                console.log(err)
            }
            res.status(201).json({status: "sucesso ao criar novo livro"});
        })
    }


    static atualizarLivro(req, res) {
        let livroId = req.params.id
        livros.findByIdAndUpdate(livroId, {$set: req.body}, (err) => {
            if(!err){ 
                res.status(200).json({status: "sucesso ao atualizar o novo livro"});
                return
            }
            res.status(200).json({status: `${err} erro ao atualizar o novo livro`});
        })
    }

    static deletarLivro(req, res) {
        let livroId = req.params.id
        livros.findByIdAndDelete(livroId, (err) => {
            if(!err){ 
                res.status(200).json({status: "sucesso ao deletar livro"});
                return
            }
            res.status(200).json({status: `${err} erro ao deletar livro`});
        })
    }

}

export default LivroController