require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(cors({
  origin: 'https://buho-caso-7-api-production.up.railway.app', // Cambia esto con el origen permitido para tu cliente
  methods: ['GET', 'POST'], // Métodos de solicitud permitidos
  allowedHeaders: ['Content-Type'] // Encabezados permitidos
}
))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('PORT', process.env.PORT || 4000)

// routes
app.use('/', require('./routes/home'))
app.use('/api/email', require('./routes/emailer'))

// server
app.listen(app.get('PORT'), () => {
  console.log(`server on port ${app.get('PORT')}`)
})
