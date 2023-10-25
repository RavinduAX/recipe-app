const express = require('express')
const router = express.Router()
const { createUser, getUserRecipe, updateRecipe, deleteRecipe } = require('../controllers/userController')


//POST
router.post('/', createUser);
//GET
router.get('/:id', getUserRecipe)
//PUT
router.put('/:id/update', updateRecipe)
//PUT
router.put('/:id/delete', deleteRecipe)

module.exports = router;