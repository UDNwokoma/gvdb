const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const pendingSchema = new Schema({
  email: {type: String,required: false,unique: false,trim: false,minlength: 1},
  transaction: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const pending = mongoose.model("pending",pendingSchema)

module.exports = pending;


