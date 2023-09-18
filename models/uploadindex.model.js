const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const Upindex = new Schema({
  account: {type: String,required: false,unique: false,trim: false,minlength: 0},
  subject: {type: String,required: false,unique: false,trim: false,minlength: 0},
  upload: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Uploadindex = mongoose.model("uploadindex",Upindex)

module.exports = Uploadindex;


