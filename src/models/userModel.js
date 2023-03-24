import con from '../db/dbConnection.js'
import {z} from 'zod'


//validar dados
export const userSchame = z.object({
    id: z.number().optional(),
    nomecompleto: z.string().min(3).max(50),
    nomeusuario: z.string().min(5, { message: "O usuário deve ter ao menos 5 Caracteres" }).max(50),
    idade: z.number()
})

export const validateUser =(user) => {
    return userSchame.parse(user)
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
