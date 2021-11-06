const amqp = require('amqplib/callback_api')
const logger = require('../config/logger')
const getId = require('../util/getId')
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

            const queue = process.env.QUEUE_NAME

            channel.assertQueue(queue, {
                durable: false
            });

            channel.consume(queue, async function(msg) {
                logger.info(msg.content.toString())
                const id = getId(JSON.parse(msg.content.toString()))
                await sendRedis(id, { id, status: 'SUCCESS'})
            }, {
                noAck: true
            });
        })
    })
}