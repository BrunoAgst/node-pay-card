const { post } = require('axios')

module.exports = {
    postRequest: async (payload) => {
        const url = process.env.HOST
        const { data } = await post(url, payload)
        return JSON.stringify(data)
    }
}