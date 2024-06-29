const bookController = require('../controllers/booksControllers')
const { verifyToken } = require('../middleware/auth')
const express = require('express')
const router = express.Router()

router.post('/signUp', bookController.signUpFn)

router.post('/login', bookController.loginFn)

router.get('/viewAllMembers', verifyToken, bookController.viewAllMember)

router.post('/addnewmember', verifyToken, bookController.addNewMember)

router.post('/removeMember', verifyToken, bookController.removeMember)

router.post('/upDateInfo', verifyToken, bookController.upDateInfo)

router.post('/addNewbook', verifyToken, bookController.addNewBook)

router.get('/listAllBook', verifyToken, bookController.listAllBook)

router.post('/removeBook', verifyToken, bookController.removeBook)

router.post('/updateBook', verifyToken, bookController.updateBook)

router.post('/bookIssue', verifyToken, bookController.issueBook)

router.post('/returnBook', verifyToken, bookController.returnBook)


module.exports = router 
