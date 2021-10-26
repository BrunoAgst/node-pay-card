const { Schema, model } = require('mongoose')

const customerSchema = new Schema({
    customer_name: String,
    age: Number,
    email: String,
    tax_id: String,
    address: String
})

module.exports = model('Customer', customerSchema)