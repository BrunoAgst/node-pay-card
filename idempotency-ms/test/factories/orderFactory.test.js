const { describe, test, expect } = require('@jest/globals')
const OrderFactory = require('../../src/factories/orderFactory')


describe('#OrderFactory', () => {
    test('should return order factory', () => {
        const payload = {
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
        const orderFactory = new OrderFactory(payload)
        const result = orderFactory.factory()

        const expected = {
            name: 'loja_teste',
            customer: {
              name: 'Bruno Augusto',
              age: '24',
              email: 'bruno@teste.com',
              tax_id: '85676287098',
              address: 'Rua teste, 123, cidade teste, guarulhos-sp'
            },
            transaction: {
              type: 'CREDIT',
              card: '5392873759385979',
              cvv: '123',
              expiration_date: '11/28',
              currency: 'BRL',
              amount: '2000'
            }
        }
        
        expect(result).toEqual(expected)

    })
})