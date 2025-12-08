import livro from '../models/livros.js'
import { autor } from '../models/autor.js';

class LivroControler {
    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: ` ${erro.message} - falha na requisição` });
        }
    }

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}

            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: 'criado com sucesso', livro: livroCriado});
        } catch (erro) {
            res.status(500).json({ message: ` ${erro.message} - falha ao cadastrar livro` });
        }
    }

}

export default LivroControler;