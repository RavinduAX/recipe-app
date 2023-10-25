const express = require('express')
const router = express.Router()
const { createUser, getUserRecipe, updateRecipe } = require('../controllers/userController')


//POST
router.post('/', createUser);
//GET
router.get('/:id', getUserRecipe)
//PUT
router.put('/:id', updateRecipe)

module.exports = router;