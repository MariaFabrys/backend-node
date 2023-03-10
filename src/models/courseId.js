import con from '../db/dbConnection.js'
 
export const listAllId = (callback) => {
    const sql = "SELECT id FROM cursos;"
    con.query(sql, (err, result) => {
        if (err) {
            callback(err, null)
            console.log(`DB error: ${err.sqlMessage}`)
        } else {
            callback(null, result)
        }
    })
}