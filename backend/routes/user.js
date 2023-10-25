const express = require('express')
const router = express.Router()
const { createUser, getUserRecipe } = require('../controllers/userController')


//POST
router.post('/', createUser);
//GET
router.get('/:id', getUserRecipe)

module.exports = router;