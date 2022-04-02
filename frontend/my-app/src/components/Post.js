import React from 'react'
import '../css/post.css'
import { useState } from 'react'
import { Users } from '../data.js'
import { ThumbUp  } from '@mui/icons-material'

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes)
    const [liked, setLiked] = useState(false)

    const addLikes = () => {
        setLikes(liked ? likes-1 : likes+1)
        setLiked(!liked)
    }
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postHeader">
                <img className="postUserImg" src={Users.filter((u) => u.id ===post.userId)[0].profilePic} alt="" />
                <span className="postName">{Users.filter((u) => u.id ===post.userId)[0].username}</span>
            </div>
            <div className="postBody">
                <span className="postMessage">{post.message}</span>
                <img src={post.image} alt="" className="postImg" />
            </div>
            <div className="postFooter">
                <div className="postFooterLeft">
                    <ThumbUp onClick={addLikes} style={{marginRight: 10}} />
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