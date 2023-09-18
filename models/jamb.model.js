const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const JambSchema = new Schema({
  subject: {type: String,required: false,unique: false,trim: false,minlength: 0},
  account: {type: String,required: false,unique: false,trim: false,minlength: 0},
  question: {type: String,required: false,unique: false,trim: false,minlength: 0},
  qimg: {type: String,required: false,unique: false,trim: false,minlength: 0},
  A: {type: String,required: false,unique: false,trim: false,minlength: 0},
  B: {type: String,required: false,unique: false,trim: false,minlength: 0},
  C: {type: String,required: false,unique: false,trim: false,minlength: 0},
  D: {type: String,required: false,unique: false,trim: false,minlength: 0},
  E: {type: String,required: false,unique: false,trim: false,minlength: 0},
  ANS: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Jamb = mongoose.model("jamb",JambSchema)

module.exports = Jamb;


