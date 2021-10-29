const amqp = require('amqplib/callback_api')
const logger = require('../config/logger')

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

            var queue = 'payable';

            channel.assertQueue(queue, {
                durable: false
            });

            channel.consume(queue, async function(msg) {
                console.log(msg.content.toString())
            }, {
                noAck: true
            });
        })
    })
}