'use strict'

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const Router = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(Router)

app.listen(PORT, () => {
    console.log('Server running', PORT)
})

