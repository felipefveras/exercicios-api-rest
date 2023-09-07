const express = require('express')
const rotas = express()

const { listarAluno, acharAluno, cadastrarAluno, deletarAluno } = require('./controladores/alunos.js')
let alunos = require('./dados/bancodedados.js')
const verificarSenha = require('./intermediarios.js')


rotas.get('/alunos', verificarSenha, listarAluno)
rotas.get('/alunos/:id', verificarSenha, acharAluno)

rotas.post('/alunos', verificarSenha, cadastrarAluno)

rotas.delete('/alunos/:id', verificarSenha, deletarAluno)


module.exports = rotas