import con from '../db/dbConnection.js'

//const courseModel = {}

 export const listAllCourses = (callback) => {
    const sql = "SELECT * FROM cursos;"
    con.query(sql, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)
        } else {
            callback(null, result)
        }
    })
}


//forma mais rápida de inserir dados 
export const createCourse = (course, callback) => {
    const { nome, cargahoraria } = course
    const sql = 'INSERT INTO cursos SET ?;'
    const values = {nome, cargahoraria}

    con.query(sql, values, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)

        } else {
            callback(null, result)
        }
    })
}

 export const deleteCourse = (id, callback) => {
    const sql = 'DELETE FROM cursos WHERE id =?; '
    const value =[id]

    con.query(sql, value, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)

        } else {
            callback(null, result)
        }
    })
}

export const updateCourse = (course, callback) => {
    const { nome, cargahoraria } = course
    const sql = 'UPDATE cursos SET ?;'
    const values = { nome, cargahoraria }

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
export default { listAllCourses, createCourse, deleteCourse, updateCourse }
