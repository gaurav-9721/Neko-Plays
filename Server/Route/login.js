const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../db/userschema')
const bcrypt = require('bcryptjs')


router = express.Router();


router.get('/login', async (req, res) => {
    return res.send("hello")
})

router.post('/login', async (req, res) => {
    const email = req.body.email,
    password = req.body.password;

    if ((!email) || (!password)){
        return res.status(422).json({'error': 'Please fill all the fields!'})
    }

    const user = await User.findOne({'email': email})

    if (!user){
        return res.status(422).json({'error':'Invalid Credentials'})
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch){
        return res.status(422).json({'error':'Invalid Credentials'})
    }

    // JWT TOKEN
    const jwttoken = await jwt.sign({'_Id': user._id}, process.env.SECRET_KEY)
    //console.log(token)
    res.cookie("neko-plays", jwttoken, {
        httpOnly: true,
        maxAge: 3600
    })

    console.log("Login successful")
    return res.status(200).json({"message": "Login Successful"})
    
})

module.exports = router;