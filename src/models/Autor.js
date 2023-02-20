import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String, required: true},
});

const autor = mongoose.model('autor', livroSchema)

export default autor;