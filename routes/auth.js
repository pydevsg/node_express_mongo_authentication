const express = require('express'); 
const router = express.Router();
const User = require('../models/User');

router.post('/register',async(req,res)=>{
    // error check
    // if(error) return res.send(400).send(error.details[0].message);
    const newUser = new User({
                username: req.body.username,
                email:req.body.email,
                password: req.body.password
    });
    try
    {
        const savedUser = await newUser.save();
        res.send(savedUser);
    }
    catch(err)
    {
        res.status(400).send(err);
    }

})
module.exports = router;