import userModel from '../models/userModel.js'


export const listAllUsers = (req, res) => {
    userModel.listAllUsers((error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result) {
            if (result.length) {
                res.json(result)
            } else {
                res.json({ message: "Nenhum usuário cadastrado!" })
            }
        }
    })
}

export const showUser = (req, res) => {
    const id = req.params.id

    userModel.showUser(id, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json(result[0])
    })
}

export const createUser = (req, res) => {

    const user = req.body

    try {
        userModel.validateUser(user)
        userModel.createUser(user, (error, result) => {
            if (error)
                res.status(500).json({ message: "Erro no Banco de Dados" })
            if (result) {
                res.json({
                    message: "Usuário Cadastrado!",
                    user: {
                        id: result.insertId,
                        ...user
                    }
                })
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'Dados inválidos',
            error: error.errors
        })
    }
}


export const deleteUser = (req, res) => {
    const { id } = req.body
    userModel.deleteUser(id, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result) {
            if (result.affectedRows) {
                res.json({ message: "Usuário deletado com Sucesso!" })
            } else {
                res.status(404).json({ message: `usuário ${id} não encontrado` })
            }
        }
    })
}


export const deleteIdUser = (req, res) => {
    const { id, slug } = req.params
    console.log(slug)
    //TODO Verificar se os dados são válidos
    userModel.deleteUser(id, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result) {
            if (result.affectedRows) {
                res.json({ message: "Usuário deletado com Sucesso!" })
            } else {
                res.status(404).json({ message: `usuário ${id} não encontrado` })
            }
        }
    })
}


export const updateUser = (req, res) => {

    const user = req.body
    //TODO Verificar se os dados são válidos

    userModel.updateUser(user, (error, result) => {
        if (error)
            res.status(500).json({ message: "Erro no Banco de Dados" })
        if (result)
            res.json({ message: "Usuário atualizado!" })

        if (result.affectdRows) {

            res.json({ message: "Usuário atualizado com sucesso!" })
        } else {
            res.status(404).json({ message: `Usuário ${user.id} não encontrado` })
        }
    })
}




