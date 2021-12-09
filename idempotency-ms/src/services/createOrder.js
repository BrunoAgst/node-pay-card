'use strict'
class CreateOrder {

    constructor(orderFactory, orderRepository,externalService){
        this.ordersFactory = orderFactory
        this.orderRepository = orderRepository
        this.externalService = externalService
    }

    orderFactory(payload){
        return this.ordersFactory.factory(payload)
    }

    registerDatabase(payload) {
        return this.orderRepository.registerOrder(payload)
    }

    requestSwitchMS(url, payload){
        return this.externalService.request(url, payload)
    }

    pollingOrder(id) {
        return new Promise((resolve, reject) => {

            const interval = setInterval( () => {
                try {
                    let response =  this.orderRepository.getOrder(id)
                    if(response) {
                        resolve('JSON.parse(response)')
                        clearInterval(interval)
                        
                    }
                } catch(error) {
                    clearInterval(interval)
                    reject(error)
                    return
                }
            }, 5000)
        })
    }
}

module.exports = CreateOrder