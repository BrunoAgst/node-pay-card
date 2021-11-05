const { post } = require('axios')

module.exports = async (message) => {
    return await post(process.env.HOST_ADAPTER, message)
}