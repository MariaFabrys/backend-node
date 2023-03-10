import userModel from '../models/userModel.js'


export const listAllUsers = (req, res) => {
    userModel.listAllUsers((error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json(result)
    })
}

export const showUser = (req, res) => {
    const id = req.params.id

    userModel.showUser(id, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json(result)
    })
}


export const createUser = (req, res) => {

    const user = req.body
    //TODO Verificar se os dados são válidos

    userModel.createUser(user, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json({ message: "Curso Cadastrado!" })
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.body
    userModel.deleteUser(id, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json({ message: "Curso Deletado com sucesso!" })
    })
}

export const deleteIdUser = (req, res) => {
    const { id, slug } = req.params
    console.log(slug)
    //TODO Verificar se os dados são válidos
    userModel.deleteIdUser(id, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            //TODO Verificar se ao menos uma linha foi removida!
            res.json({ message: "Curso Deletado com Sucesso!" })
    })
}

export const updateUser = (req, res) => {

    const course = req.body
    //TODO Verificar se os dados são válidos

    userModel.updateUser(course, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json({ message: "Curso atualizado!" })
    })
}




