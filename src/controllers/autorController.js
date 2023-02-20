import autor from "../models/Autor.js";

class AutorController {
     static listarAutor(req, res) {
        autor.find((err, autor)=>{
            console.log(err)
            res.status(200).json(autor);
        })
    }

    static listarAutorPorId(req, res) {
        let livro = autor.findById(req.params.id, function (err, autor) {
            if(!err) {
                res.status(200).json(autor)
                return
            }

            res.status(500).json(`erro ao caçar autor: ${err}`)

        });
    }
    

    static cadastrarAutor(req, res) {
        let autorObj = new autor(req.body) 
        autorObj.save((err)=>{
            if(err){ 
                console.log(err)
            }
            res.status(201).json({status: "sucesso ao criar novo autor"});
        })
    }


    static atualizarAutor(req, res) {
        let autorId = req.params.id
        autor.findByIdAndUpdate(autorId, {$set: req.body}, (err) => {
            if(!err){ 
                res.status(200).json({status: "sucesso ao atualizar o novo autor"});
                return
            }
            res.status(200).json({status: `${err} erro ao atualizar o novo autor`});
        })
    }

    static deletarAutor(req, res) {
        let autorId = req.params.id
        autor.findByIdAndDelete(autorId, (err) => {
            if(!err){ 
                res.status(200).json({status: "sucesso ao deletar autor"});
                return
            }
            res.status(200).json({status: `${err} erro ao deletar autor`});
        })
    }

}

export default AutorController