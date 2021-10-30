const { createClient } = require('redis')
const logger = require('../config/logger')
const client = createClient()
module.exports = (key) => {
    return new Promise((resolve, reject) => {
        client.on('error', (err) => logger.error(err))
        client.get(key, function(err, res) {
            if (err) {
                logger.error(err)
                reject(err)
                return
            }
            resolve(res)
        })
    })
}