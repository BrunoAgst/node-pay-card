'use strict'

const pino = require('pino')
const pretty = require('pino-pretty')
const stream = pretty({
    prettyPrint: { colorize: true, ignore: 'pid,hostname' }
})

const logger = pino(stream)

module.exports = logger