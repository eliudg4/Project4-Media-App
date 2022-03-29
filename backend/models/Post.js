const mongoose = require('../db/connection')

const postSchema = new mongoose.Schema ({
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: String
    }
},
    // {timestamps: true}
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post