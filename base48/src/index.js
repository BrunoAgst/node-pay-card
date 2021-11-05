require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3022

app.use(bodyParser.json())

app.get('/heath', (_, response) => {
    response.send('service running')
})

app.listen(PORT, () => {
    console.log(`running port ${PORT}`)
})