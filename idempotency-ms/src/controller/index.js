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
            const id = orderCreated.message._id.toString()
            const url = process.env.HOST_CREATE
            await requestSwitch.postRequest({id, transaction: payload.transaction}, url)

            const interval = setInterval(async () => {
                let response = await pollingRedis(id)
                
                if (response) {
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