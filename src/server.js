//const express = require('express')
import  express  from 'express'
import { SERVER } from './config.js'
//const courseRoutes = require('./routes/courseRoutes')
import courseRoutes from './routes/courseRoutes.js'
//const userRoutes = require('./routes/userRoutes')
import userRoutes from './routes/userRoutes.js'
import errorHandler from './middlewares/errorHandler.js'
import logger from './middlewares/logger.js'

const app = express()
const port = SERVER.PORT

app.use(logger)
app.use(express.json())

app.use('/course', courseRoutes)
app.use('/user', userRoutes)

app.all('*', (req, res) => {
  res.status(404).json( {message:  '404 Rota não encontrada...'})
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






