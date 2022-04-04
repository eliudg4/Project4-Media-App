const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

//Get a Post
router.get('/:id', async (req, res, next) => {
    try{
        const post = Post.findById(req.params.id)
        res.status(200).json(post)
    } catch(err) {
        next(err)
    }
})

//Timeline Posts
router.get('/timeline/:userId', async (req, res, next) => {
    try{
        const currentUser = await User.findById(req.params.userId)
        const usersPosts = await Post.find({userId: currentUser._id})
        const followerPosts = await Promise.all(currentUser.friends.map((friendId) => {
            Post.find({userId: friendId})
        }))
        res.status(200).json(usersPosts.concat(...followerPosts))
    } catch(err) {
        next(err)
    }
})

// All user Posts
router.get('/userpage/:username', async (req, res, next) => {
    try{
        const posts = await Post.find({userId: user._id})
        const user = await User.findOne({username: req.params.username})
        const followerPosts = await Promise.all(currentUser.friends.map((friendId) => {
            Post.find({userId: friendId})
        }))
    } catch(err) {
        next(err)
    }
})

// Create a Post
router.post('/', async (req, res, next) => {
    const createdPost = new Post(req.body)
    try {
        const post = await createdPost.save()
        res.status(200).json(post)
    } catch(err) {
        next(err)
    }
})

// Update your post
router.put('/:id', async (req, res, next) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId) {
            await Post.updateOne({$set: req.body})
            res.status(200)
        }
    } catch(err) {
        next(err)
    }
})

// Delete your Post
router.delete('/:id', async (req, res, next) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId) {
            await Post.deleteOne()
        }
    } catch(err) {
        next(err)
    }
})

//Liking and Disliking Posts
router.put('/:id/like', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)) {
            await Post.updateOne({$push: {likes: req.body.userId}})
            res.status(200)
        } else {
            await Post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200)
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router