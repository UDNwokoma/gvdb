const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const accountSchema = new Schema({
  balance: {type: String,required: false,unique: false,trim: false,minlength: 0},
  fullname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  country: {type: String,required: false,unique: false,trim: false,minlength: 0},
  phone: {type: String,required: false,unique: false,trim: false,minlength: 0},
  password: {type: String,required: false,unique: false,trim: false,minlength: 0},
  refferal: {type: String,required: false,unique: false,trim: false,minlength: 0},
  qlink: {type: String,required: false,unique: false,trim: false,minlength: 0},
  pin: {type: String,required: false,unique: false,trim: false,minlength: 0},
  ref: {type: String,required: false,unique: false,trim: false,minlength: 0},
  usdt: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Account = mongoose.model("Account",accountSchema)

module.exports = Account;