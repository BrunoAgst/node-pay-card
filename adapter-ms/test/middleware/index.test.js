const { describe, test, jest: _jest, expect, beforeEach } = require('@jest/globals')
const { create } = require('../../src/middleware')
const { createdRequest } = require('../../src/schemas')

describe('#middleware', () => {
    
    beforeEach(() =>  _jest.clearAllMocks())

    test('should return success', () => {
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

        const next = _jest.fn()
        const response = _jest.fn()

        const result = create(request, response, next)
        
        expect(result).toBeUndefined()
    })

    test('should return error', () => {
        const request = {
            body: {
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

        const next = _jest.fn()
        const response = {
            status: () => { 422 },
            json: () => { error: "name is required" }
        }

        const result = create(request, response, next)
        
        expect(result).toBeUndefined()
        
    })
})