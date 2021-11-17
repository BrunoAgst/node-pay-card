const logger = require('../config/logger')
const { createClient } = require('redis')
const client = createClient(process.env.REDIS)
module.exports = (id, message) => {
    const payload = JSON.stringify(message)
    return new Promise((resolve, reject) => {
        client.on('error', function (err) {
            logger.error(err)
            reject(err)
        })
        resolve(client.set(id, payload))
    })
}