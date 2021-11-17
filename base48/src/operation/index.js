const logger = require('../config/logger')
const request = require('../services/request')
const sendMessage = require('../services/sendMessage')

module.exports = {
    create: async (message) => {
        const payload = JSON.stringify(message)
        try {
            //const adapter = request(payload)
            await sendMessage(payload)

        } catch (error) {
            logger.error(error)
            await sendMessage(error)
            return error
        }
    }
}