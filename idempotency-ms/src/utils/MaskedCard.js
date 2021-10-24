module.exports = (card) => {
    const cardTotal = card.length
    const cardSplit = card.split('')
    const cardInit = cardSplit.splice(0,6).join('')
    const cardFinal = cardSplit.splice(-4,cardTotal).join('')
    return `${cardInit}${'*'.repeat(cardTotal-10)}${cardFinal}`
}