const amqp = require("amqplib/callback_api");
const operation = require('../operation')
const logger = require("../config/logger");

module.exports = () => {
  amqp.connect(process.env.HOST_AMQP, async (error, connection) => {
    if (error) {
      logger.error(error);
      return error;
    }

    connection.createChannel(function (error, channel) {
      if (error) {
        logger.error(error)
        return error
      }

      const queue = process.env.QUEUE_RECEIVER_NAME;

      channel.assertQueue(queue, {
        durable: false,
      })

      channel.consume(
        queue,
        async function (msg) {
            logger.info(msg.content.toString())
            await operation.create(msg.content.toString())
        },
        {
          noAck: true,
        }
      )
    })
  })
}
