'use strict'

const orderFactory = require('../factories/orderFactory.js')
const OrderRepository = require('../infra/repository/index.js')
const ExternalService = require('../infra/services/externalService.js')

class CreateOrder {

    orderFactory(payload){
        return new orderFactory(payload).factory()
    }

    async registerDatabase(payload){
        return await new OrderRepository().registerOrder(payload)
    }

    requestSwitchMS(url, payload){
        return new ExternalService().request(url, payload)
    }

    pollingOrder(id) {
        return new Promise((resolve, reject) => {

            const interval = setInterval(async () => {
                try {
                    let response = await new OrderRepository().getOrder(id)
                    if(response) {
                        clearInterval(interval)
                        resolve(JSON.parse(response))
                    }
                } catch(error) {
                    clearInterval(interval)
                    reject(error)
                }
            }, 5000)
        })
    }
}

module.exports = CreateOrder