const logger = require('../config/logger')
const request = require('../services/request')
const sendMessage = require('../services/sendMessage')

module.exports = {
    create: async (payload) => {
        try {
            const adapter = request(payload)
            await sendMessage(adapter)

        } catch (error) {
            logger.error(error)
            await sendMessage(error)
            return error
        }
    }
}