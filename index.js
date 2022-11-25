const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

//get data in JSON format
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//port
const PORT = process.env.PORT || 5500;

//import routes
const GuestItemRoute = require("./routes/guestItems");

//connect to database
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

//connect to server
app.listen(PORT, () => console.log("Server Connected"));

//home route
app.use("/", GuestItemRoute);
