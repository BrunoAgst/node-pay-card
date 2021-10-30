const logger = require('../config/logger')
const { createClient } = require('redis')
const client = createClient()
module.exports = async (id, message) => {
    client.on('error', (err) => logger.error(err))
    await client.set(id, JSON.stringify(message))
}