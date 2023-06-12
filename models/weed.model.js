const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const weedSchema = new Schema({
  email: {type: String,required: false,unique: false,trim: false,minlength: 1},
  amount: {type: String,required: false,unique: false,trim: false,minlength: 1},
  wallet: {type: String,required: false,unique: false,trim: false,minlength: 1},
  type: {type: String,required: false,unique: false,trim: false,minlength: 1},
  idd: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const weed = mongoose.model("weed",weedSchema)

module.exports = weed;


