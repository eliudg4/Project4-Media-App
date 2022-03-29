const express = require('express')
const User = require('../models/User')
const router = express.Router()

// Update
router.put('/:id', async (req, res, next) => {
     if(req.body.userId === req.params.id || req.user.admin) {
         try {
            await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
         } catch (err) {
            next(err)
         }
     }
})


module.exports = router