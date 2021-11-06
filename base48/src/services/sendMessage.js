const amqp = require("amqplib/callback_api")
const logger = require("../config/logger")

module.exports = (message) => {
 
  amqp.connect(process.env.HOST_AMQP, function (error, connection) {
    if (error) {
      logger.error(error)
      throw error
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        logger.error(error1)
        throw error1
      }
      const queue = process.env.QUEUE_SEND_NAME

      channel.assertQueue(queue, {
        durable: false,
      })

      channel.sendToQueue(queue, Buffer.from(message))
      console.log(" [x] Sent %s", message)
    })
  })
}
