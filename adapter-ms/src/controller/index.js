const { postRequest } = require('../services/request')
module.exports = {
    create: async (req, res) => {
        const payload = req.body
        
        await postRequest(payload)

        res.status(200).json({
            message: 'transaction success',
            isValid: true
        })
    }
}