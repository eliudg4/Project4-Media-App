import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/post.css'
import { useState, useEffect } from 'react'
// import { Users } from '../data.js'
import { ThumbUp  } from '@mui/icons-material'
import axios from 'axios'
import { SessionContext } from '../context/SessionContext'

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes.length)
    const [liked, setLiked] = useState(false)
    const [user, setUser] = useState({})
    const {user: currentUser} = useContext(SessionContext)

    useEffect(() => {
        const fetchUser = async () => {
        const res = await axios.get(`user/${post.userId}`)
        setUser(res.data)
        }
        fetchUser()
      },[post.userId])

    const likeHandler = () => {
        try {
            axios.put("http://localhost:4000/posts/" + post._id+"/like", {userId: currentUser._id})
        } catch(err) {

        }
        setLikes(liked ? likes - 1 : likes + 1)
        setLiked(!liked)
    }
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postHeader">
                <Link to={`UserPage/${user.username}`}>
                <img className="postUserImg" src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} alt="" />
                </Link>
                <span className="postName">
                    {currentUser.username}
                    {/* {Users.filter((u) =>u.id === post?.userId)[0].username} */}
                    </span>
            </div>
            <div className="postBody">
                <span className="postMessage">
                    {post.description}
                    
                    </span>
                <img src={post.image} alt="" className="postImg" />
            </div>
            <div className="postFooter">
                <div className="postFooterLeft">
                    <ThumbUp onClick={likeHandler} style={{marginRight: 10}} />
                    <span className="postLikeCount">{post.likes} likes</span>
                </div>
                <div className="postFooterRight">
                    <span className="postComment">{post.comments} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post