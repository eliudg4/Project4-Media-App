const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (req, res) => {
    const newUser = new User ({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    try {
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
})
module.exports = router