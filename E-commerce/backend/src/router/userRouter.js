const express = require('express')
const Users = require('../controllers/user')
const { signupSchema } = require('../middleware/validation')
const validator = require('../middleware/validator')
const { verifyToken } = require('../middleware/auth')

const router = express.Router()

router.post('/users/signup', validator.validate(signupSchema), Users.userSignup)

router.post('/users/login', Users.userLogin)

router.get('/users/view', verifyToken, Users.allUser)

router.put('/users/update', verifyToken, Users.updateUser)

router.delete('/user/update', verifyToken, Users.deleteUser)

module.exports = router

