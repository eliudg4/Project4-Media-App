const express = require('express')
const app = express()
// const PORT = 4000
app.set("port", process.env.PORT || 4000);
const cors = require('cors')
const dotenv = require('dotenv')
const session = require('express-session')
const bodyParser = require('body-parser')
const userController = require('./controllers/user')
const sessionController = require('./controllers/session')
const postsController = require('./controllers/posts')
const multer = require('multer')
const path = require('path')

dotenv.config()

app.use('/images', express.static(path.join(__dirname, "public/images")))

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.json())

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})
app.post("/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("Complete")
    } catch(err) {

    }
})

app.use('/user', userController)
app.use('/session', sessionController)
app.use('/posts', postsController)




app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });