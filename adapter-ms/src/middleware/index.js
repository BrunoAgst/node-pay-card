'use strict'

const { createdRequest } = require("../schemas")

module.exports = {
    create: (request, response, next) => {
        const { error } = createdRequest.validate(request.body)
        
        if (error) {
            response.status(422)
            response.json({ error: error.details[0].message })
            return
        }

        next()
    }
}