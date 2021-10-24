const maskedCard = require('../utils/MaskedCard')

module.exports = ({ name, customer, transaction }) => {

    const {
        type,
        card,
        currency,
        amount
    } = transaction

    return {
        name,
        customer,
        transaction: {
            type,
            card: maskedCard(card),
            currency,
            amount
        }
    }
}