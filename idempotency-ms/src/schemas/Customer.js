'use strict'

const { Schema, model } = require('mongoose')

const customerSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    tax_id: String,
    address: String
})

module.exports = model('Customer', customerSchema)