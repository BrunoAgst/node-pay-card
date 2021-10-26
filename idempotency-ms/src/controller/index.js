const logger = require('../config/logger')
const registerOrder = require('../services/registerOrder')
const orderFactory = require('../factories/orderFactory')

module.exports = {
    create: async (req, res) => {
        try {
            const payload = req.body
            const order = orderFactory(payload)
            await registerOrder(order)
                        
            res.status(200).json({
                message: 'transaction success',
                isValid: true
            })
        } catch (error) {
            logger.error(error.message)
            res.status(500).json({error, isValid: false})
        }
    }
}