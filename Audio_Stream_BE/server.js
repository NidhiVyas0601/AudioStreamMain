const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/router');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config()

 
app.use(cors(
  {
    origin: "http://localhost:4200"
  }
 
));
 
app.listen( process.env.PORT,function check(err)
{
    if(err)
    console.log("error",err)
    else
    console.log("started")
});
 
mongoose.connect( process.env.DATABASE_CONNECTION,{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB",error);
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});

app.use(express.json());
app.use(routes);
app.use(cors());