'use strict'

require('dotenv').config()
require('./config/database')()

const express = require('express')
const bodyParser = require('body-parser')
const Router = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(express.json())
app.use(Router)

app.listen(PORT, () => {
    console.log('Server running port', PORT)
})