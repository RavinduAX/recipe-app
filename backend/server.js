const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URL;

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//connect with db
mongoose.connect(DB_URI)
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      logger.info(`Server UP : ${PORT}`);
    })
    logger.info('DB Connected')
  })
  .catch((err) => {
    logger.error(err.message)
  })

