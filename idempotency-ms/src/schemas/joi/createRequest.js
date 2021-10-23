const Joi = require('joi')

const createRequest = Joi.object({
    name: Joi.string().required(),
    customer: Joi.object({
        name: Joi.string().required(),
        age: Joi.string(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'gov', 'br'] } }).required(),
        tax_id: Joi.string().min(11).max(11).required(),
        address: Joi.string().required()
    }).required(),
    transaction: Joi.object({
        type: Joi.string().required(),
        card: Joi.string().required(),
        cvv: Joi.string().min(3).max(3).required(),
        expiration_date: Joi.string().required(),
        currency: Joi.string().min(3).max(3),
        amount: Joi.string().required()
    }).required()

})

module.exports = createRequest