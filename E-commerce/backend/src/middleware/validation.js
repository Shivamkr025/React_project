const Joi = require('joi')

const signupSchema = Joi.object({
    name: Joi.string().min(2).required(),
    age: Joi.number().min(18).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

module.exports = {signupSchema}