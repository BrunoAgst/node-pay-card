const { expect } = require('chai')
const { describe, it } = require('mocha')
const EnumStatus = require('../../src/utils/EnumStatus')

describe('test enumstatus', () => {
    it('return processing', () => {
        expect(EnumStatus.PROCESSING).to.deep.equal('PROCESSING')
    })
    it('return canceled', () => {
        expect(EnumStatus.CANCELED).to.deep.equal('CANCELED')
    })
    it('return approved', () => {
        expect(EnumStatus.APPROVED).to.deep.equal('APPROVED')
    })
    it('return denied', () => {
        expect(EnumStatus.DENIED).to.deep.equal('DENIED')
    })
})