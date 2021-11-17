const { post } = require('axios')

module.exports = {
    postRequest: async (payload, url) => {
        return await post(url, payload)
    }
}