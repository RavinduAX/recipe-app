const express = require('express')
const router = express.Router()
const { createUser, getUsers } = require('../controllers/userController')


//POST
router.post('/', createUser);
//GET
router.get('/', getUsers)

module.exports = router;