const createRequest = require('../schemas/createRequest')
module.exports = {
    create: (req, res, next) => {
        const { error } = createRequest.validate(req.body)
        
        if (error) {
            return res.status(422).json({ error: error.details[0].message })
        }

        next()
    }
}