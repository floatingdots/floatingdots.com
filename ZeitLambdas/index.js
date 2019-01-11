require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('./middleware/cors')
const v1 = require('./api/v1')

const port = process.env.PORT || 5000
const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors('https://floatingdots.com'))

app.use('/v1', v1)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.json({
    error: err.message,
  })
})

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})
