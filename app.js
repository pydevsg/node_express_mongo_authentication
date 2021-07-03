const express = require('express')  // middleware
const mongoose = require('mongoose'); //odm 
const app = express(); 
const port = process.env.PORT || 5000; //port
const bodyparser = require('body-parser');
const dotenv = require('dotenv'); 

dotenv.config(); // configuring the .env file variables
// Routes
const authRoute = require('./routes/auth'); // import route
const User = require('./models/User'); // connection with database model

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRoute); // localhost:3000/api/user/route

mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log('Database is connected');
    })
    .catch(err =>{
        console.log(err.message);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

