const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/practiceMongo")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

module.exports =  mongoose.model("User", userSchema)