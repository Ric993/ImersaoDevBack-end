import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Permite que o servidor interprete dados JSON enviados nas requisições.
    app.use(express.json());
    // Rota GET para buscar todos os posts.
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    // Rota para imagem
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost );
};

export default routes;