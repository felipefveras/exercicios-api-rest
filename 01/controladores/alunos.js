let alunos = require('../dados/bancodedados.js')
let idAluno = 1

const listarAluno = function (req, res) {
    console.log('listou alunos')
    return res.status(200).json(alunos)
}

const acharAluno = function (req, res) {
    if (Number(req.params.id) > alunos.length || Number(req.params.id) < 0) {
        return res.status(400).send('digite um numero valido')
    }

    let encontrarAluno = alunos.find(function (aluno) {
        return aluno.id === Number(req.params.id)
    })

    if (encontrarAluno.length === 0) {
        return res.status(404).send('aluno não encontrado')
    }

    return res.json(encontrarAluno)
}

const cadastrarAluno = function (req, res) {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'nome, sobrenome, idade ou curso não preenchidos/criados' })
    }

    if (nome.trim() === '' || sobrenome.trim() === '' || curso.trim() === '') {
        return res.status(400).json({ mensagem: "nome, sobrenome ou curso não preenchidos" })
    }
    if (Number(idade) < 18) {
        return res.status(400).json({ mensagem: "idade menor que 18 anos" })
    }

    const aluno = {
        id: idAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }


    alunos.push(aluno)

    return res.status(201).json(aluno)
}

const deletarAluno = function (req, res) {
    const { id } = req.params
    const aluno = alunos.find(function (aluno) {
        return aluno.id === Number(id)
    })

    if (Number(id) > alunos.length || Number(id) <= 0) {
        return res.status(400).json({ mensagem: "informe um id válido" })
    }
    if (!aluno) {
        return res.status(404).json({ mensagem: "o aluno não existe" })
    }

    alunos = alunos.filter(function (aluno) {
        return aluno.id !== Number(id)
    })

    //remover usando o splice():
    //const indice = alunos.findIndex(function (elemento) {
    //    return elemento.id === Number(id)
    //})

    //alunos.splice(indice, 1)
    return res.status(200).send(alunos)
}

module.exports = {
    listarAluno,
    acharAluno,
    cadastrarAluno,
    deletarAluno
}