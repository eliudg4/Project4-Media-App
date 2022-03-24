const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema ({
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type:String,
        require: true,
        unique: true
    },
    username: {
        type:String,
        require: true,
        unique: true,
        min: 5,
        max: 30
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    profilePic: {
        type: String,
        default: ""
    },
    friends: {
        type: Array,
        default: []
    },
},
    // {timestamps: true}
)

const User = mongoose.model('User', userSchema)
module.exports = User