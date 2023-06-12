const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const answerSchema = new Schema({
  question: {type: String,required: false,unique: false,trim: false,minlength: 0},
  fullname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  answer: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  category: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Question = mongoose.model("Question",answerSchema)

module.exports = Question;