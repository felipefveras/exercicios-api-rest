let livros = require('../dados/livros')

const atualizarLivro = function (req, res) {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: "o titulo é obrigatorio" })
    }
    if (!autor) {
        return res.status(400).json({ mensagem: "o autor é obrigatorio" })
    }
    if (!ano) {
        return res.status(400).json({ mensagem: "o ano é obrigatorio" })
    }
    if (!numPaginas) {
        return res.status(400).json({ mensagem: "o numero de paginas é obrigatorio" })
    }

    const livro = livros.find(function (livro) {
        return livro.id === Number(id)
    })
    if (!livro) {
        return res.status(404).json({ mensagem: "livro não encontrado" })
    }

    //console.log(livro)
    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

    return res.status(204).json(livro)
    //204: deu certo mas n retorna nenhum conteudo
}

const alterarRecursos = function (req, res) {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const livro = livros.find(function (livro) {
        return livro.id === Number(id)
    })
    if (!livro) {
        return res.status(404).json({ mensagem: "não existe livro para o id informado" })
    }

    if (titulo) {
        livro.titulo = titulo
    }
    if (autor) {
        livro.autor = autor
    }
    if (ano) {
        livro.ano = ano
    }
    if (numPaginas) {
        livro.numPaginas = numPaginas
    }


    return res.status(204).json()
}

const listarLivros = function (req, res) {
    res.json(livros)
}

module.exports = { atualizarLivro, alterarRecursos, listarLivros }