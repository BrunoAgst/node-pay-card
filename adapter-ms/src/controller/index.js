const logger = require('../config/logger')
const { postRequest } = require('../services/request')
const EnumRoute = require('../util/EnumRoute')

module.exports = {
    create: async (req, res) => {
        try {
            const payload = req.body
            
            await postRequest(payload, EnumRoute.CREATE)
            
    
            res.status(200).json({
                message: 'transaction success',
                isValid: true
            })
        } catch (error) {
            logger.error({
                message: error.message,
                error: error.response.data
            })
            res.status(500).json({error: 'Service Unavailable', isValid: false})
        }
    },
    cancel: async (req, res) => {
        try {
            const order_id = req.params.order_id
            console.log(order_id)
            res.status(200).json({
                message: 'transaction canceled',
                isValid: true
            })
        } catch (error) {
            logger.error(error.message)
            res.status(500).json({error: 'Service Unavailable', isValid: false})
        }
    }
}