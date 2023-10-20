const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT;

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//listen for requests
app.listen(PORT, () => {
  console.log(`Server UP : ${PORT}`);
})