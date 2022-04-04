const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/register', async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const userToLogin = await User.findOne({
            email: req.body.email })
            !userToLogin && res.status(404).json("Incorrect email please try again.")
            
        const validPassword = await bcrypt.compare(req.body.password, userToLogin.password)

        res.status(200).json(userToLogin)
    } catch (err) {
        next (err)
    }
})

module.exports = router