const {connect, connection} = require('mongoose')

module.exports = () => {
    const url = process.env.MONGODB
    connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    connection.once('open', () => { console.log('database connected') })
}