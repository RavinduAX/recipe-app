const express = require('express')
const router = express.Router()
const { createUser, getUserRecipe, addRecipe, deleteRecipe, loginUser } = require('../controllers/userController')


//POST
router.post('/', createUser);
//GET
router.get('/:id', getUserRecipe)
//PUT
router.put('/:id/update', addRecipe)
//PUT
router.put('/:id/delete', deleteRecipe)
//POST
router.post('/login', loginUser)

module.exports = router;