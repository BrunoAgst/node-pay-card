'use strict'

const orderSchema = require('../../schemas/Order')
const customerSchema = require('../../schemas/Customer')
const transactionSchema = require('../../schemas/Transaction')
const { createClient } = require('redis')

class OrderRepository {

    async registerOrder(payload){
        try {
            const { name, customer, transaction } = payload
            
            let searchCustomer = await customerSchema.findOne({ tax_id: customer.tax_id })
    
            if(!searchCustomer) searchCustomer  = await customerSchema.create(customer)
    
            const transactionPayload = await transactionSchema.create({ ...transaction, customer_id: searchCustomer._id })
    
            const order = await orderSchema.create({
                name,
                date: new Date(),
                customer: await customerSchema.findById(searchCustomer._id),
                transaction: await transactionSchema.findById(transactionPayload._id)
            })
    
            return { message: order }

        } catch(error) {
            return { error }
        }
    }

    async updateOrder(id, status ) {
        try {
            return await orderSchema.findByIdAndUpdate(id, { status } )
        } catch(error) {
            return { error }
        }
    }

    getOrder(key){
        const client = createClient(process.env.REDIS)

        return new Promise((resolve, reject) => {

            client.on('error', (error) => {
                reject(error)
                return
            })
    
            client.get(key, function(error, response) {
                if (error) {
                    reject(error)
                    return
                }
                resolve(response)
            })
        })
    }
}

module.exports = OrderRepository