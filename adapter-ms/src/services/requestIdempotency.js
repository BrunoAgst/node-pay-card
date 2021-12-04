'use strict'

const axios = require('axios')

module.exports = {
    createdTransaction(url, payload){
        return axios.post(url, payload)
    }
}
