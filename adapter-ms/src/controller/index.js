'use strict'

const logger = require("../config/logger")
const RequestIdempotency = require("../services/requestIdempotency")

module.exports = {
    create: async (request, response) => {
        try {

            const { body: payload } = request
            const url = process.env.URL_IDEMPOTENCY

            await RequestIdempotency.createdTransaction(url, payload)
            
            response.status(200)
            response.json({
                message: 'transaction success',
                isValid: true
            })


        } catch(error) {
            logger.error({
                message: error.message,
                error
            })

            response.status(500)
            response.json({
                error: 'Service Unavailable',
                isValid: false
            })
        }
    }
}