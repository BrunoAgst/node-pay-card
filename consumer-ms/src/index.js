require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3006

app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`)
})