const { describe, test, expect, jest: _jest } = require('@jest/globals')
const axios = require('axios')
const ExternalService = require('../../../src/infra/services/externalService')

describe('#ExternalService', () => {
    test('should request external service', async () => {
        _jest.spyOn(
            axios,
            'post'
        ).mockResolvedValue({
            message: 'success'
        })
        
        const url = ""
        const payload = ""

        const externalService = new ExternalService()
        const result = await externalService.request(url, payload)

        const expected = { responseMS: { message: 'success' } }

        expect(result).toEqual(expected)
    })

    test('should return error external service', async () => {
        _jest.spyOn(
            axios,
            'post'
        ).mockImplementation(() => new Error('error'))
        
        const url = ""
        const payload = ""

        const externalService = new ExternalService()
        const result = await externalService.request(url, payload)

        expect(result).toBeTruthy()
    })
})
