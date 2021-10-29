require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3006
const amqp = require('./services/receiveOrder')
app.use(bodyParser.json())

app.get('/heath', (request, response) => {
    response.send('service running')
})

app.listen(PORT, () => {
    amqp()
    console.log(`Server running ${PORT}`)
})