const { Schema, model } = require('mongoose')

const customerSchema = new Schema({
    customer_name: String,
    age: Number,
    mail: String,
    tax_id: String,
    address: String
})

module.exports = model('Customer', customerSchema)