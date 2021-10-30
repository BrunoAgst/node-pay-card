const logger = require('../config/logger')
const registerOrder = require('../services/registerOrder')
const orderFactory = require('../factories/orderFactory')
const requestSwitch = require('../services/request')
const pollingRedis = require('../services/poolingRedis')

module.exports = {
    create: async (req, res) => {
        try {
            const payload = req.body
            const order = orderFactory(payload)
            const orderCreated = await registerOrder(order)
            await requestSwitch({id: orderCreated.message._id.toString(), transaction: payload.transaction})

            const interval = setInterval(async () => {
                const response = await pollingRedis(id)
                if (response !== null) {
                    clearInterval(interval)
                    return res.status(200).json({
                        message: 'transaction success',
                        isValid: true
                    })
                }
            }, 5000)
            
        } catch (error) {
            logger.error(error.message)
            res.status(500).json({error, isValid: false})
        }
    }
}