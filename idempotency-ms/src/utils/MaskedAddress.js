module.exports = (address) => {
    const length = address.length
    return `${address.slice(0, 14)}${'*'.repeat(length-14)}`
}