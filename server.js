const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//const bodyParser = require("body-parser");
//app.use(bodyParser.json({limit: '100kb'}));

require('dotenv').config();
//require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json({limit: '500kb'}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,});

/** 
const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://espertee:tetraxi@cluster0.nmj0h.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("jamb").collection("devices");
    // perform actions on the collection object
    client.close();
  });
*/
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const jambindex = require('./routes/jambindex');
const uploadindex = require('./routes/uploadindex');
const upload = require('./routes/upload');
const jamb = require('./routes/jamb');


app.use('/jambindex',jambindex);
app.use('/uploadindex',uploadindex);
app.use('/upload', upload);
app.use('/jamb', jamb);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
