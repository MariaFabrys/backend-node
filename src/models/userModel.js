import con from '../db/dbConnection.js'
import {z} from 'zod'


//TODO testar regex com zod e ChatGPT

export const userSchame = z.object({
    
    id: z.number({message: "ID deve ser um valor númerico!"}).
        optional(),

    nomecompleto: z.string
    ({
        required_error: "Nome é obrigatória.",
        invalid_type_error: "Nome deve ser uma string.",
    })

     .min(3, {message: "Nome deve ter no mínimo 3 Caracteres!"})
     .max(100, {message:"Nome deve ter no màximo 100 Caracteres!"}),

    nomeusuario: z.string
    ({
        required_error: "Nome é obrigatória.",
        invalid_type_error: "Nome deve ser uma string.",
    })
    .min(3, { message: "O usuário deve ter ao menos 3 Caracteres!" })
    .max(50, {message: "O usuário deve ter no máximo de 50 Caracteres!"}),

    idade: z.number
        ({
            required_error: "Nome é obrigatória.",
            invalid_type_error: "Nome deve ser uma string.",
        })
    .min(2, { message: "Idade deve ter no mínimo 2 Caracteres!" })
    .max(3, { message: "Nome deve ter no màximo 3 Caracteres!" }),

})



//parse devolve as mensagens de erro ou seu deu tudo certo
export const validateUser = (user) => {
    return userSchame.safeParse(user)
}

export const listAllUsers = (callback) => {
    const sql = "SELECT * FROM usuarios;"
    con.query(sql, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)
        } else {
            callback(null, result)
        }
    })
}

export const showUser = (id, callback) => {
    const sql = "SELECT * FROM usuarios WHERE id = ?;"
    const value = [id]
    con.query(sql, value, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)
        } else {
            callback(null, result)
        }
    })
}


//forma mais rápida de inserir dados 
export const createUser = (user, callback) => {
    const { nomecompleto, nomeusuario, idade } = user
    const sql = 'INSERT INTO usuarios SET ?;'
    const values = { nomecompleto, nomeusuario, idade }

    con.query(sql, values, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)

        } else {
            callback(null, result)
        }
    })
}

export const deleteUser = (id, callback) => {
    const sql = 'DELETE FROM usuarios WHERE id =?; '
    const value = [id]

    con.query(sql, value, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)

        } else {
            callback(null, result)
        }
    })
}

export const updateUser = (user, callback) => {
    const { nomecompleto, nomeusuario, idade } = user
    const sql = 'UPDATE usuarios SET ?;'
    const values = { nomecompleto, nomeusuario, idade   }

    con.query(sql, values, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)

        } else {
            callback(null, result)
        }
    })
}

//deu as duas opção com default e sem
export default { listAllUsers, showUser, createUser, deleteUser, updateUser, validateUser }
