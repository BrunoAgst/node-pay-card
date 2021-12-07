'use strict'

class OrderFactory {
    
    constructor({name, customer, transaction}){
        this.name = name
        this.customer = {
            name: customer.name,
            age: customer.age,
            email: customer.email,
            tax_id: customer.tax_id,
            address: customer.address
        }
        this.transaction = {
            type: transaction.type,
            card: transaction.card,
            cvv: transaction.cvv,
            expiration_date: transaction.expiration_date,
            currency: transaction.currency,
            amount: transaction.amount
        }
    }

    factory(){
        return {
            name: this.name,
            customer: {
                name: this.customer.name,
                age: this.customer.age,
                email: this.customer.email,
                tax_id: this.customer.tax_id,
                address: this.customer.address
            },
            transaction: {
                type: this.transaction.type,
                card: this.transaction.card,
                cvv: this.transaction.cvv,
                expiration_date: this.transaction.expiration_date,
                currency: this.transaction.currency,
                amount: this.transaction.amount
            }
        }
    }
}

module.exports = OrderFactory