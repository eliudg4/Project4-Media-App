import React from 'react'
import '../css/post.css'

const Post = () => {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postHeader">
                <img className="postUserImg" src="" alt="" />
                <span className="postName">Junior Guzman</span>
            </div>
            <div className="postBody">
                <span className="postMessage">Hello World!</span>
                <img src="https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/1/12/1294859657274/Earth-007.jpg" alt="" className="postImg" />
            </div>
            <div className="postFooter">
                <div className="postFooterLeft">
                    <img src="" alt="" className="likeButton" />
                    <span className="postLikeCount">14 People liked it</span>
                </div>
                <div className="postFooterRight">
                    <span className="postComment">12 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post