const Joi = require('joi')

const createRequest = Joi.object({
    type: Joi.string().required(),
    card: Joi.string().required(),
    cvv: Joi.string().min(3).max(3).required(),
    expiration_date: Joi.string().required(),
    currency: Joi.string().min(3).max(3),
    amount: Joi.string().required()
})

module.exports = createRequest