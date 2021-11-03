const orderSchema = require('../schemas/database/order')
const logger = require('../config/logger')

module.exports = async (id, status) => {
    try {
        await orderSchema.findByAndUpdate(id, {status})
    } catch(error) {
        logger.error(error)
        return { error }
    }
}