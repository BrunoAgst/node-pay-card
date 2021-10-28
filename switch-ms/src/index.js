require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3003

app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
})