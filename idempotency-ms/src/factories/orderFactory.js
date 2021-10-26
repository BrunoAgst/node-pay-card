const maskedCard = require('../utils/MaskedCard')
const maskedTaxId = require('../utils/MaskedTaxId')
const maskedAddress = require('../utils/MaskedAddress')

module.exports = ({ name: store_name, customer, transaction }) => {

    const {
        name,
        email,
        tax_id,
        address,
    } = customer

    const {
        type,
        card,
        currency,
        amount
    } = transaction

    return {
        store_name,
        customer: {
            customer_name: name,
            email,
            tax_id: maskedTaxId(tax_id),
            address: maskedAddress(address)
        },
        transaction: {
            type,
            card: maskedCard(card),
            currency,
            amount
        }
    }
}