const mongoose = require('mongoose')

// mongoURI = process.env.NODE_ENV === "production" ? process.env.DB_URL : process.env.MONGODB_URI

const MongoURI = 'mongodb://localhost:27017/home'

mongoose.connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(instance => {
    console.log(`Connected to the db: ${instance.connections[0].name}`)
})
.catch(err => console.log(`Connection failed`, err))

module.exports = mongoose