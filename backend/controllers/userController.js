const User = require('../models/userModel')
const logger = require('../utils/logger')

//create a new user
const createUser = async (req, res) => {
  const newUser = req.body;

  await User.create(newUser)
    .then(() => {
      res.status(200).json({ status: true, payload: null })
    })
    .catch((err) => {
      res.status(500).json({ status: false, payload: null })
      logger.error(err.message)
    })
}
module.exports = { createUser }