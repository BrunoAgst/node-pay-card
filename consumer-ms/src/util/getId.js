module.exports = (payload) => {
    return payload.split(',')[0].split(':')[1].replace(/["]+/g, '')
}