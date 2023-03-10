//const express = require('express')
import  express  from 'express'
import { SERVER } from './config.js'
//const courseRoutes = require('./routes/courseRoutes')
import courseRoutes from './routes/courseRoutes.js'
//const userRoutes = require('./routes/userRoutes')
import userRoutes from './routes/userRoutes.js'

const app = express()
const port = SERVER.PORT

app.use(express.json())

//TODO: Tratar erro de json inválido

// app.use('/id', courseId)
app.use('/course', courseRoutes)
app.use('/user', userRoutes)

app.all('*', (req, res) => {
  res.status(404).send('404 Rota não encontrada!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

