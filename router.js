const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const postControler = require('./controllers/postController')

//user related routes
router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

//profile related routes
router.get('/profile/:username', userController.ifUserExists, userController.profilePostsScreen)

//post related routes
router.get('/create-post', userController.mustBeLoggedIn, postControler.viewCreateScreen)
router.post('/create-post', userController.mustBeLoggedIn, postControler.create)
router.get('/post/:id', postControler.viewSingle)

module.exports = router