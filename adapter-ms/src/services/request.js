const { post } = require('axios')
const EnumRoute = require('../util/EnumRoute')

module.exports = {
    postRequest: async (payload, route) => {
        const url = route === EnumRoute.CREATE ?
            process.env.HOST_CREATE : process.env.HOST_CANCEL
        return await post(url, payload)
     
    }
}