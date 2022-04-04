const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema ({
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type:String,
        require: true
    },
    username: {
        type:String,
        require: true
    },
    password: {
        type: String,
        require: true,
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
    {timestamps: true}
)

const User = mongoose.model('User', userSchema)
module.exports = User