const amqp = require('amqplib/callback_api')
const logger = require('../config/logger')
const sendRedis = require('../services/sendRedis')

module.exports = () => {
    amqp.connect(process.env.HOST_AMQP, async (error, connection) => {
        if (error) {
            logger.error(error)
            return error
        }
            
        connection.createChannel(function (error, channel) {
            if (error) {
                logger.error(error)
                return error
            }

            const queue = 'payment';

            channel.assertQueue(queue, {
                durable: false
            });

            channel.consume(queue, async function(msg) {
                console.log(msg.content.toString())
                const message = JSON.parse(msg.content.toString())
                await sendRedis(message)
            }, {
                noAck: true
            });
        })
    })
}