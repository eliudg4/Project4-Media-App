import React, { useContext, useRef, useState } from 'react'
import '../css/sharePost.css'
import { SessionContext } from '../context/SessionContext'
import axios from 'axios'
import { InsertPhoto } from '@mui/icons-material'

const SharePost = () => {
    const {user} = useContext(SessionContext)
    const description = useRef()
    const [imageFile, setImageFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const post = {
            userId: user._id,
            description: description.current.value
        }
        if(imageFile) {
            const data = new FormData()
            const fileName = Date.now() + imageFile.name
            data.append("file", imageFile)
            data.append("name", fileName)
            post.image = fileName
            try {
                await axios.post("http://localhost:4000/upload", data)
            } catch(err) {

            }
        }

        try {
            await axios.post('http://localhost:4000/posts', post)
            window.location.reload()
        } catch(err) {

        }
    }

  return (
    <div className='sharePost'>
        <div className='sharePostContainer'>
            <div className="shareHeader">
                <img className='sharePostImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" />
                <input placeholder={"What's on your mind, " +user.username+"?"} className='shareInput' ref={description} />
            </div>
            <hr className='hr' />
            <form className="shareBody" onSubmit={submitHandler}>
                <div className="options">
                    <label htmlFor='file' className="option">
                        <span className='optionText'>
                            <InsertPhoto />
                            Photo / Video</span>
                            <input style={{display: "none"}} type="file" id='file' accept='.jpg, .jpeg,.png' onChange={(e) => setImageFile(e.target.files[0])} />
                    </label>
                    <div className='option'>
                        <span className='optionText'>Feeling /Activity</span>
                    </div>
                    <div className="option">
                        <span className='optionText'>Go Live</span>
                    </div>
                </div>
                <button className='button' type='submit'>Post</button>
            </form>
        </div>

    </div>
  )
 }

export default SharePost