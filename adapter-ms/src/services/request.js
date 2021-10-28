const { post } = require('axios')

module.exports = {
    postRequest: async (payload) => {
        const url = process.env.HOST
        const response = await post(url, payload)
        return response
    }
}