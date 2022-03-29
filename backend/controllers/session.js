const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/register', async (req, res, next) => {
    try {
            const desiredUsername = req.body.username
            const desiredEmail = req.body.email
            const userExists = await User.findOne({ username: desiredUsername, email: desiredEmail})
            if(userExists) {
                res.send('Username already taken')
            } else {
                // Encrypting password
                const salt = bcrypt.genSaltSync(10)
                const hashedPassword = bcrypt.hashSync(req.body.password, salt)
                req.body.password = hashedPassword
                console.log(req.body)
                const createdUser = await User.create(req.body)
                console.log(createdUser)
                res.send('Check your terminal')

            }
        }
     catch (err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const userToLogin = await User.findOne({
            email: req.body.email
        })
        if(userToLogin) {
            const validPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
            if(validPassword) {
                res.send('User is logged in')
            } else {
                res.redirect('/session/login')
            }
        } else {
            res.redirect('/session/login')
        }
    } catch (err) {
        next (err)
    }
})

module.exports = router