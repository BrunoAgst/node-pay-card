const { describe, test, expect, jest: _jest, beforeEach } = require('@jest/globals')
const Controller = require('../../src/controller')
const RequestIdempotency = require('../../src/services/requestIdempotency')

describe('#Controller', () => {

    beforeEach(() => {
        _jest.clearAllMocks()
    })

    test('should return transaction success', async () => {
        const request = {
            body: {
                "name": "loja_teste",
                "customer": {
                    "name": "Bruno Augusto",
                    "age": "24",
                    "email": "bruno@teste.com",
                    "tax_id": "85676287098",
                    "address": "Rua teste, 123, cidade teste, guarulhos-sp"
                },
                "transaction": {
                    "type": "CREDIT",
                    "card": "5392873759385979",
                    "cvv": "123",
                    "expiration_date": "11/28",
                    "currency": "BRL",
                    "amount": "2000"
                }
            }
        }

        const response = {
            status: _jest.fn(),
            json: _jest.fn()
        }

        _jest.spyOn(
            RequestIdempotency,
            'createdTransaction'
        ).mockResolvedValue([])

        const result = await Controller.create(request, response)
        
        expect(response.status).toHaveBeenCalled()
        expect(response.json).toHaveBeenCalled()
        expect(result).toBeUndefined()
    })

     test('should return transaction error', async () => {
        const request = {
            body: {
                "name": "loja_teste",
                "customer": {
                    "name": "Bruno Augusto",
                    "age": "24",
                    "email": "bruno@teste.com",
                    "tax_id": "85676287098",
                    "address": "Rua teste, 123, cidade teste, guarulhos-sp"
                },
                "transaction": {
                    "type": "CREDIT",
                    "card": "5392873759385979",
                    "cvv": "123",
                    "expiration_date": "11/28",
                    "currency": "BRL",
                    "amount": "2000"
                }
            }
        }

        const response = {
            status: _jest.fn(),
            json: _jest.fn()
        }

        _jest.spyOn(
            RequestIdempotency,
            'createdTransaction'
        ).mockImplementation(() => { throw new Error('error') })


        const result = await Controller.create(request, response)

        expect(response.status).toHaveBeenCalled()
        expect(response.json).toHaveBeenCalled()
        expect(result).toBeUndefined()
    })
})