const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const Service = require('../../src/services/request.js')
    
describe('test request', async () => {
        
    it('test post request', async () => {
        const url = 'http://idempotency.com/create'
        const request = {
            "name": "amazon",
            "customer": {
                "name": "Bruno Augusto",
                "age": "24",
                "mail": "bruno@teste.com",
                "tax_id":"58974198843",
                "address": "Rua das Andradas 000 - Vila Romanópoli - SP"
                
            },
            "transaction": {
                "type": "CREDIT",
                "card": "5512910228030367",
                "cvv": "972",
                "expiration_date": "11/05/2022",
                "currency": "BRL",
                "amount": "5000"
            }
        }
        const stub = sinon.stub(Service, Service.postRequest.name)
        stub
            .withArgs(url, request)
            .returns({
                message: "success",
                isValid: true
            })
            
        const result = await Service.postRequest(url, request)
         expect(result).to.deep.equal({
            message: "success",
            isValid: true
        })

    })
    
})
