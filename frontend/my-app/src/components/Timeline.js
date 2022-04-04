import React, { useContext } from 'react'
import '../css/timeline.css'
import SharePost from './SharePost'
import Post from './Post'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SessionContext } from '../context/SessionContext'
import { Posts } from '../data.js'

const Timeline = ({ username }) => {
  const [posts, setPosts] = useState([])
  const {user} = useContext(SessionContext)

  useEffect(() => {
    const grabPosts = async () => {
    const res = username 
    ? await axios.get('http://localhost:4000/posts/userpage/' + username)
    : await axios.get('http://localhost:4000/posts/timeline/' + user._id)
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      })
    )
    }
    grabPosts()
  },[username, user._id])

  return (
    <div className='timeline'>
        <div className="timelineContainer">
            <SharePost />
            {posts.map((p) => (
              <Post key={p._id} post={p} />
            ))}
        </div>


        
    </div>
  )
}

export default Timeline