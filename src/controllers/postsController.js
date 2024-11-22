import {getTodosPosts, criarPost} from "../models/postModel.js";
import fs from "fs"

export async function listarPosts(req, res) {
    // Chama a função para buscar os posts e envia a resposta para o cliente.
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
 
export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado);
    } catch {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na resquisição"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao:"",
        imgurl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na resquisição"})
    }
}