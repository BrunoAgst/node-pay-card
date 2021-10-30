const { createClient } = require('redis')
const logger = require('../config/logger')
const client = createClient()
module.exports = async (key) => {
    client.on('error', (err) => logger.error(err))
    return await client.get(key, (err, res) => {
        if (err) {
            logger.error(err)
            throw err
        }
        
        return res
    })
}