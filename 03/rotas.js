const express = require('express')
const rotas = express()

const { atualizarLivro, alterarRecursos, listarLivros } = require('./controladores/livros.js')
let livros = require('./dados/livros.js')


rotas.get('/livros', listarLivros)

rotas.put('/livros/:id', atualizarLivro)

rotas.patch('/livros/:id', alterarRecursos)

module.exports = rotas