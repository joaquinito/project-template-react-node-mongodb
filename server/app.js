const express = require('express')
require('express-async-errors')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const exampleRouter = require('./controllers/example')

app = express()

console.log('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use(cors())
app.use(express.static('server/dist'))

app.use('/api/example', exampleRouter)

module.exports = app