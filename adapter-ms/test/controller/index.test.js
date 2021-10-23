const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const controller = require('../../src/controller')

describe('test create controller', async () => {
    let stub = {}


    before(() => {
        stub = sinon.stub(controller, controller.create.name)
    })

    it('return success', async () => {
            stub
                .withArgs()
                .returns({
                    message: 'transaction success',
                    isValid: true
                })
        const create = await controller.create()
        expect(create).to.be.deep.equal({
            message: 'transaction success',
            isValid: true
        })
    })

    it('return error', async () => {
            stub
                .withArgs()
                .returns({
                    error: 'Service Unavailable',
                    isValid: false
                })
        const create = await controller.create()
        expect(create).to.be.deep.equal({
            error: 'Service Unavailable',
            isValid: false
        })
    })
})