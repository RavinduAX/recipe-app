const User = require('../models/userModel')
const logger = require('../utils/logger')

//create a new user
const createUser = async (req, res) => {
  const newUser = req.body;

  if (!newUser) {
    return res.status(400).json({ status: false, msg: 'Please Fill in all the fields', payload: null })
  }

  await User.create(newUser)
    .then(() => {
      res.status(201).json({ status: true, msg:'User Create Successfull', payload: null })
    })
    .catch((err) => {
      res.status(500).json({ status: false, msg:'User Create Failed', payload: null })
      logger.error(err.message)
    })
}
module.exports = { createUser }