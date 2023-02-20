import mongoose from "mongoose";

mongoose.connect("mongodb+srv://daniel2bueno:n6fKHCXEYLoVlL8x@cluster0.lwaslvo.mongodb.net/nodeapp");

let db = mongoose.connection;

export default db;