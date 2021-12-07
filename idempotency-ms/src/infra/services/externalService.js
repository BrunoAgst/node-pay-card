'use strict'

const axios = require('axios')

class ExternalService {
    
    async request(url, payload){
        try {
            const responseMS = await axios.post(url, payload)
            return { responseMS }

        } catch(error) {
            return { error }
        }
    }
}

module.exports = ExternalService