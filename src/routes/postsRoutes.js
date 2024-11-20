import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o servidor interprete dados JSON enviados nas requisições.
    app.use(express.json());
    // Rota GET para buscar todos os posts.
    app.get('/posts', listarPosts);
}

export default routes;