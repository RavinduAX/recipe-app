const User = require('../models/userModel')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt');

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
    return res.status(400).json({ status: false, msg: 'Please fill in all the fields!', payload: empty })
  }

  //hashing pswrd
  const password = newUser.password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      logger.info("Hashing Error")
      return res.status(500).json({ status: false, msg: 'Hashing Error', payload: empty })
    } else {
      const userObj = { ...newUser, password: hash }
      //create user
      User.create(userObj)
        .then(() => {
          res.status(201).json({ status: true, msg: 'User create successfull', payload: null })
          logger.info("User created")
          empty = []
        })
        .catch((err) => {
          res.status(500).json({ status: false, msg: 'User create failed!', payload: err.message })
          logger.error(err.message)
        })
    }
  });
}

//get recipe from user
const getUserRecipe = async (req, res) => {
  const userId = req.params.id;
  await User.findById(userId)
    .then((user) => {
      logger.info(`${user._id} details received`)
      return res.status(201).json({ status: true, msg: 'Get user recipe done', payload: user })
    })
    .catch((err) => {
      logger.error(err.message)
      return res.status(400).json({ status: false, msg: '', payload: err.message })
    })
}

//add recipes of user
const addRecipe = async (req, res) => {
  const userId = req.params.id
  const recipeId = req.query.r_id

  await User.findByIdAndUpdate(userId, { $push: { favourite: recipeId } })
    .then(() => {
      logger.info('Recipe updated')
      return res.status(201).json({ status: true, msg: 'Recipe updated', payload: null })
    })
    .catch((err) => {
      logger.error(err.message)
      return res.status(400).json({ status: false, msg: '', payload: err.message })
    })
}

//delete recipe from user
const deleteRecipe = async (req, res) => {
  const userId = req.params.id
  const recipeId = req.query.r_id

  await User.findByIdAndUpdate(userId, { $pull: { favourite: recipeId } })
    .then(() => {
      logger.info('Recipe deleted')
      return res.status(201).json({ status: true, msg: 'Recipe deleted', payload: null })
    })
    .catch((err) => {
      logger.error(err.message)
      return res.status(400).json({ status: false, msg: '', payload: err.message })
    })
}

// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body

  await User.findOne({ email: username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ status: false, msg: 'User not found!', payload: null })
      }
      bcrypt.compare(password, user.password)
        .then((isValid) => {
          if (isValid) {
            return res.status(200).json({ status: false, msg: 'Authentication successful!', payload: null })
          } else {
            return res.status(401).json({ status: false, msg: 'Authentication failed!', payload: null })
          }
        })
        .catch((err) => {
          logger.error(err.message);
          return res.status(400).json({ status: false, msg: '', payload: err.message })
        })
    })
    .catch((err) => {
      logger.error(err.message);
      return res.status(400).json({ status: false, msg: '', payload: err.message })
    })

}

module.exports = { createUser, getUserRecipe, addRecipe, deleteRecipe, loginUser }