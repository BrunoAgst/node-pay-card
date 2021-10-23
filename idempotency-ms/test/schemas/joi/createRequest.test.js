const { expect } = require('chai')
const { describe, it } = require('mocha')
const createRequest = require('../../../src/schemas/joi/createRequest')
describe('test createRequest', () => {
    it('return success', () => {
        const payload = {
            "name": "amazon",
            "customer": {
                "name": "Bruno Augusto",
                "age": "24",
                "email": "bruno@teste.com",
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

        const { value } = createRequest.validate(payload)
        expect(value).to.deep.equal(payload)
    })

    it('return error', () => {
        const payload = {
            "name": "amazon",
            "customer": {
                "name": "Bruno Augusto",
                "age": "24",
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

        const { error } = createRequest.validate(payload)
        expect(error.details[0].message).to.deep.equal('"customer.email" is required')
    })
})