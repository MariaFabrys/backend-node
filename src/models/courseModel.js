const mysql = require('mysql')
const courseModel = {}

courseModel.listAllCourses = (callback) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "apinode2"
    })
    const sql = "SELECT * FROM cursos;"
    con.query(sql, (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    })
}

courseModel.createCourse = (req, res) => {
    res.json({ message: "Entrou na rota /course com POST!" })
}

module.exports = courseModel