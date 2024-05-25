const express = require('express')
const Users = require('../controllers/user')
const { signupSchema } = require('../middleware/validation')
const validator = require('../middleware/validator')
const { verifyToken } = require('../middleware/auth')

const router = express.Router()

router.post('/api/users/signup', validator.validate(signupSchema), Users.userSignup)

router.post('/api/users/login', Users.userLogin)

router.get('/api/users/view', verifyToken, Users.allUser)

router.put('/api/users/update', verifyToken, Users.updateUser)

router.delete('/api/user/delete', verifyToken, Users.deleteUser)

module.exports = router

