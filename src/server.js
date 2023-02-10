const express = require('express')
const listaCursos = require ('./db/cursos.json')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  const msg = [{nome: 'ola mundo json!'}]
  res.json(msg)
})

app.get('/cursos', (req, res) => {
  res.json(listaCursos)
})



app.post('/cursos', (req, res) => {
  res.json({message: 'ola post json!'})
})


app.put('/cursos', (req, res) => {
  res.send('Fiz um update no curso!')
})


app.all('*', (req, res) => {
  res.send('404 Rota não encontrada')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

