const orderSchema = require('../schemas/database/order')
const customerSchema = require('../schemas/database/customer')
const transactionSchema = require('../schemas/database/transaction')

module.exports = async (payload) => {
    try {
        const { store_name, customer, transaction } = payload
        let searchCustomer

        searchCustomer = await customerSchema.findOne({ tax_id: customer.tax_id })
 
        if (!searchCustomer) {
            searchCustomer = await customerSchema.create(customer)
        }
              
        const transactionPayload = await transactionSchema.create({ ...transaction, customer_id: searchCustomer._id })
        
        const order = await orderSchema.create({
            store_name,
            date: new Date(),
            customer: await customerSchema.findById(searchCustomer._id),
            transaction: await transactionSchema.findById(transactionPayload._id)
        })
        
        return {
            message: order,
            isValid: true
        }

    } catch (error) {
        return { error }
    }
}