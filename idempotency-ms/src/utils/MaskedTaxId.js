module.exports = (tax_id) => {
    return `${tax_id.slice(0,4)}${'*'.repeat(7)}`
}