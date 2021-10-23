const logger = require('../config/logger')
const registerOrder = require('../services/registerOrder')

module.exports = {
    create: async (req, res) => {
        try {
            const payload = req.body

            await registerOrder(payload)
                        
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