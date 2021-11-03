const { post } = require('axios')

module.exports = {
    postRequest: async (payload) => {
        const url = process.env.HOST
        return await post(url, payload)
    }
}