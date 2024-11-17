const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const router = express.Router();
const userSchema = require('../schemas/userSchema')
const User = new mongoose.model('User', userSchema);

//SIGNUP
router.post("/signup", async(req, res) => {
    console.log('test')
    try {
        const hasedPass = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hasedPass
        });
        await newUser.save();

        res.status(200).json({
            message: "Signup was successful!",
        });
    
    } catch (err) {
        res.status(500).json({
            message: 'Signup failed!'
        })
    }
});

// LOGIN
router.post('/login', async(req, res) => {
    const user = await User.find({ usrname: req.body.username });
    if(user && user.length > 0){
        
    } else {
        res.status(401).json({
            'error': "Authentication failed!"
        })
    }
});

module.exports = router;