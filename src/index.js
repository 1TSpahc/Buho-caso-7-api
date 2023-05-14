const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('PORT', 4000)

// routes
app.use('/', require('./routes/home'))
app.use('/api/email', require('./routes/emailer'))

// server
app.listen(app.get('PORT'), () => {
  console.log('server on port 4000')
})