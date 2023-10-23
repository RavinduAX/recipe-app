const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNo: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favourite: [String]
})

module.exports = mongoose.model('user', userSchema)