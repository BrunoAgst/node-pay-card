const amqp = require('amqplib/callback_api')

module.exports = (message) => {
    const msg = JSON.stringify(message)
    amqp.connect(process.env.HOST_AMQP, function (error, connection) {
        if (error) throw error
        connection.createChannel(function (error1, channel){
            if (error1) throw error1
            const queue = 'payment'

            channel.assertQueue(queue, {
                durable: false
            })

            channel.sendToQueue(queue, Buffer.from(msg))
            console.log(' [x] Sent %s', msg)
        })
    })
}