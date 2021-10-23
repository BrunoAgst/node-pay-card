const logger = require('../config/logger')
const { postRequest } = require('../services/request')

module.exports = {
    create: async (req, res) => {
        try {
            const payload = req.body
            
            await postRequest(payload)
    
            res.status(200).json({
                message: 'transaction success',
                isValid: true
            })
        } catch (error) {
            logger.error(error.message)
            res.status(500).json({error: 'Service Unavailable', isValid: false})
        }
    }
}