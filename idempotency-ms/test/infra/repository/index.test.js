const { describe, test, expect, jest: _jest, beforeEach, beforeAll } = require('@jest/globals')
const OrderRepository = require('../../../src/infra/repository/index.js')
const CustomerSchema = require('../../../src/schemas/Customer.js')
const OrderSchema = require('../../../src/schemas/Order.js')
const TransactionSchema = require('../../../src/schemas/Transaction.js')
const redis = require('redis')

describe('#OrderRepository', () => {

    beforeEach(() => {
        _jest.clearAllMocks()

        _jest.spyOn(
            CustomerSchema,
            'findOne'
        ).mockResolvedValue({})

        _jest.spyOn(
            CustomerSchema,
            'create'
        ).mockResolvedValue({})

        _jest.spyOn(
            CustomerSchema,
            'findById'
        ).mockResolvedValue({})

        _jest.spyOn(
            TransactionSchema,
            'findById'
        ).mockResolvedValue({})

        _jest.spyOn(
            TransactionSchema,
            'create'
        ).mockResolvedValue({})

        _jest.spyOn(
            OrderSchema,
            'create'
        ).mockResolvedValue({
            _id: '61afab878ee85742db8706c5',
            type: 'CREDIT',
            card: '5392873759385979',
            currency: 'BRL',
            amount: '2000',
            customer_id: '61afab878ee85742db8706c3'
        })

        _jest.spyOn(
            OrderSchema,
            'findByIdAndUpdate'
        ).mockResolvedValue({
            _id: '61afa878ee85742db8706c9',
            date: '2021-12-07T18:44:23.656Z',
            customer: '61afab878ee85742db8706c3',
            transaction: '61afab878ee85742db8706c5',
            status: 'SUCCESS'
        })

    })

    beforeAll(() => _jest.clearAllMocks())

    test('should registerOrder return order', async () => {
        
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

        const expected = {
            message: {
                _id: '61afab878ee85742db8706c5',
               type: 'CREDIT',
               card: '5392873759385979',
               currency: 'BRL',
               amount: '2000',
               customer_id: '61afab878ee85742db8706c3'
            } 
        }

        const orderRepository = new OrderRepository()
        const result = await orderRepository.registerOrder(payload)
        expect(result).toEqual(expected)
    })

    test('should registerOrder return error', async () => {
        
        _jest.spyOn(
            CustomerSchema,
            'findOne'
        ).mockImplementation(() => { throw new Error('error') })

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

        const orderRepository = new OrderRepository()
        const result = await orderRepository.registerOrder(payload)
        expect(result).toBeTruthy()

    })

    test('should updateOrder update order', async () => {
        
        const expected = {
            _id: '61afa878ee85742db8706c9',
            date: '2021-12-07T18:44:23.656Z',
            customer: '61afab878ee85742db8706c3',
            transaction: '61afab878ee85742db8706c5',
            status: 'SUCCESS'
        }
        
        const orderRepository = new OrderRepository()
        const result = await orderRepository.updateOrder('61afa878ee85742db8706c9', 'SUCCESS')
        expect(result).toEqual(expected)
    })

    test('should updateOrder return error', async () => {

        _jest.spyOn(
            OrderSchema,
            'findByIdAndUpdate'
        ).mockImplementation(() => { throw new Error('error') })
        
        const orderRepository = new OrderRepository()
        const result = await orderRepository.updateOrder('61afa878ee85742db8706c9', 'SUCCESS')
        expect(result).toBeTruthy()
    })
})