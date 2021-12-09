'use strict'

const OrderRepository = require("../infra/repository")
const OrderFactory = require('../factories/orderFactory')
const CreateOrder = require("../services/createOrder.js")
const ExternalService = require("../infra/services/externalService")

module.exports = {
    
    create: async (request, response) => {
        try {
            const { body } = request
            const url = process.env.HOST_SWITCH_CREATE

            const orderFactory = new OrderFactory()
            const orderRepository = new OrderRepository()
            const externalService = new ExternalService()
            const createOrder = new CreateOrder(orderFactory, orderRepository, externalService)
            
            const orderF = createOrder.orderFactory(body)
            const { message } = await createOrder.registerDatabase(orderF)
            
            const id = message._id.toString()
        
            createOrder.requestSwitchMS(url, { id, transaction: body.transaction })

            const { status } = await createOrder.pollingOrder(id)
            
            orderRepository.updateOrder(id, status)
    
            if(status === 'DENIED') {
                response.status(404)
                response.json({ message: `Transaction ${status}`, isValid: false })
                return
            }

            response.status(200)
            response.json({ message: `Transaction ${status}`, isValid: true })

        } catch (error) {
            response.status(500)
            response.json({ error, isValid: false })
        }
    }
}