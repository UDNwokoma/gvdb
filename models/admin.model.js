const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const adminSchema = new Schema({
  Name: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Password: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Keycode: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const Admin = mongoose.model("Admin",adminSchema)

module.exports = Admin;


