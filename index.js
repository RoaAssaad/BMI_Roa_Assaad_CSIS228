const express = require("express");
require("dotenv").config();
// to use req.body to capture JSON objects.
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));


const bmi = require('./routes/bmi.routes');

// importing 
app.use('/api/bmi', bmi);
app.get("/",(req, res)=>{
    res.status(200).json({message: "this is my index page"});
});

app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);

})

