//app.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION;

// mongoose connection 
mongoose
  .connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('App Connected to Database')

    app.listen(PORT, () =>
      console.log(`Server is running at : http://localhost:${PORT}`)
    )}

  )
  .catch((error) => console.error(error));

app.use(cors());
app.use(express.json());