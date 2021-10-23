const { Schema, model } = require('mongoose')
const enumStatus = require('../../utils/EnumStatus')

const orderSchema = new Schema({
    store_name: String,
    date: Date,
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    transaction: {type: Schema.Types.ObjectId, ref: 'Transaction'},
    status: {
        type: String,
        enum: enumStatus,
        default: enumStatus.PROCESSING
    }
})

module.exports = model('Order', orderSchema)