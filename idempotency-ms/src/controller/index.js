const logger = require('../config/logger')
module.exports = {
    create: async (req, res) => {
        try {
            const payload = req.body
                
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