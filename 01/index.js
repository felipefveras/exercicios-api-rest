const express = require('express')
const verificarSenha = require('./intermediarios.js')
const rotas = require('./roteadores.js')

const app = express()
app.use(express.json())

app.use(verificarSenha)
app.use(rotas)

app.listen(3000)