const Router = require('express').Router
const router = new Router()
const userController = require('../../controllers').user
const { body } = require('express-validator')

router.post('/user-registration',[ body('username').isEmail() ], userController.createUser)

router.post('/user-login', userController.userLogin)

module.exports = router