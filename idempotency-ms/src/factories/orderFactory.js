'use strict'

class OrderFactory {
    
    factory({name, customer, transaction}){
        return {
            name: name,
            customer: {
                name: customer.name,
                age: customer.age,
                email: customer.email,
                tax_id: customer.tax_id,
                address: customer.address
            },
            transaction: {
                type: transaction.type,
                card: transaction.card,
                cvv: transaction.cvv,
                expiration_date: transaction.expiration_date,
                currency: transaction.currency,
                amount: transaction.amount
            }
        }
    }
}

module.exports = OrderFactory