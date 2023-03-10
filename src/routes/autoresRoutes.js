import express from "express"
import AutorController from "../controllers/autorController.js";

const router = express.Router();

router
    .get('/autor', AutorController.listarAutor)
    .get('/autor/:id', AutorController.listarAutorPorId)
    .post('/autor', AutorController.cadastrarAutor)
    .put('/autor/:id', AutorController.atualizarAutor)
    .delete('/autor/:id', AutorController.deletarAutor)

export default router