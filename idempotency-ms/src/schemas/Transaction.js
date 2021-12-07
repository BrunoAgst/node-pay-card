'use strict'

const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
    type: String,
    card: String,
    currency: String,
    amount: String,
    customer_id: {type: Schema.Types.ObjectId, ref: 'Customer'}
})

module.exports = model('Transaction', transactionSchema)