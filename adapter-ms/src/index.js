require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const router = require('./routes')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(router)

const server = app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`)
})
 
module.exports = server

