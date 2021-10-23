require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const app = express()

const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
})