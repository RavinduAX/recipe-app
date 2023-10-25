const User = require('../models/userModel')
const logger = require('../utils/logger')

//create a new user
const createUser = async (req, res) => {
  const newUser = req.body;
  let empty = [];

  //validate request data
  if (!newUser.name.firstname || !newUser.name.lastname) {
    empty.push("name")
  } else if (!newUser.email) {
    empty.push("email")
  } else if (!newUser.contactNo) {
    empty.push("contactNo")
  } else if (!newUser.password) {
    empty.push("password")
  }

  if (empty.length > 0) {
    logger.info("1")
    return res.status(400).json({ status: false, msg: 'Please fill in all the fields!', payload: empty })
  }

  // validate if user exists
  await User.findOne({ email: newUser.email })
    .then((user) => {
      return res.status(400).json({ status: false, msg: 'User already exists!', payload: user.name })
    })

  //create user
  await User.create(newUser)
    .then(() => {
      logger.info("3")
      res.status(201).json({ status: true, msg: 'User create successfull', payload: null })
      empty = []
    })
    .catch((err) => {
      res.status(500).json({ status: false, msg: 'User create failed!', payload: err.message })
      logger.error(err.message)
    })
}

//get recipe from user
const getUserRecipe = async (req, res) => {
  const userId = req.params.id;
  await User.findById(userId)
    .then((user) => {
      return res.status(201).json({ status: true, msg: 'Get user recipe done', payload: user })
    })
    .catch((err) => { 
      return res.status(400).json({ status: false, msg: '', payload: err.message })
   })
}


module.exports = { createUser, getUserRecipe }