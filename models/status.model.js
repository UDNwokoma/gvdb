const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const allrateSchema = new Schema({
  email: {type: String,required: false,unique: false,trim: false,minlength: 1},
  chart: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Sound: {type: String,required: false,unique: false,trim: false,minlength: 1},
  sound: {type: String,required: false,unique: false,trim: false,minlength: 1},
  tooltip: {type: String,required: false,unique: false,trim: false,minlength: 1},
  history: {type: String,required: false,unique: false,trim: false,minlength: 1},
  language: {type: String,required: false,unique: false,trim: false,minlength: 1},
  indicators: {type: String,required: false,unique: false,trim: false,minlength: 1},
  trading: {type: String,required: false,unique: false,trim: false,minlength: 1},
  trade: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const Status = mongoose.model("Status",allrateSchema)

module.exports = Status;


