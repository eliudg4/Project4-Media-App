const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const dotenv = require('dotenv')
const userController = require('./controllers/user')
const registerController = require('./controllers/register')

dotenv.config()

app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/user', userController)
app.use('/register', registerController)




app.listen(PORT, () => console.log(`Running on Port ${PORT}.`))