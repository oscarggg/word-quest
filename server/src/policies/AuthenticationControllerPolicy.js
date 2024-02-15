const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      word: Joi.string()
    }

    const {error, value} = Joi.ValidationError(req.body, schema)
    
    if (error) {
      switch(error.details[0].context.key) {
        case 'email':
          break
        default:
          res.status(400).send({
            error: 'Error registering/adding word'
          })
      }
    } else {
      next()
    }
    
    next()
  }
}
