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

// Delete
router.delete('/:id', async (req, res, next) => {
   if(req.body.userId === req.params.id || req.user.admin) {
      try {
         await User.findByIdAndDelete(req.params.id)
      } catch (err) {
         next(err)
      }
   }
})

// Get
router.get('/:id', async (req, res, next) => {
   try {
      await User.findById(req.params.id)
   } catch(err) {
      next(err)
   }
})

// Follow Friend
router.put('/:id/follow', async (req, res, next) => {
   if(req.body.userId !== req.params.id) {
      try {
         const user = await User.findById(req.params.id)
         const currentUser = await User.findById(req.body.userId)
      } catch(err) {
         next(err)
      }
   }
})

module.exports = router