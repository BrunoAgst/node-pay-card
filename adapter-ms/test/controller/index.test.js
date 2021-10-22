const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const controller = require('../../src/controller')

describe('test create controller', async () => {
    it('return success', async () => {
        const stub = sinon.stub(controller, controller.create.name)
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
})