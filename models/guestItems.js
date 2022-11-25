//import mongoose to create schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

// create schema
const GuestItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  isArrived: {
    type: Boolean,
    default: false,
  },
  isSpread: {
    type: Boolean,
    default: false,
  },
});

// export this schema
module.exports = mongoose.model("guest", GuestItemSchema);
