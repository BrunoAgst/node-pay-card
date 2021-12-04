const { describe, test, expect, jest: _jest, beforeEach } = require('@jest/globals')
const axios = require('axios')
const requestIdempotency = require('../../src/services/requestIdempotency')

describe('#RequestIdempotency', () => {

    beforeEach(() => _jest.clearAllMocks())

    test('should request createdTransaction', async () => {
        _jest.spyOn(
            axios,
            'post'
        ).mockResolvedValue({
            message: 'transaction success'
        })
        const payload = {}
        const url = ""
        const result = await requestIdempotency.createdTransaction(url, payload)

        const expected = {
            message: 'transaction success'
        }
        expect(result).toEqual(expected)
    })
})