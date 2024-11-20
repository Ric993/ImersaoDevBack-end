import getTodosPosts from "../models/postModel.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar os posts e envia a resposta para o cliente.
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
 