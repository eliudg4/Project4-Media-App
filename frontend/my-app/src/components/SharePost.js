import React from 'react'
import '../css/sharePost.css'

const SharePost = () => {
  return (
    <div className='sharePost'>
        <div className='sharePostContainer'>
            <div className="shareHeader">
                <img className='sharePostImg' src="" alt="" />
                <input placeholder="What's on your mind, Junior?" className='shareInput' />
            </div>
            <hr className='hr' />
            <div className="shareBody">
                <div className="options">
                    <div className="option">
                        <span className='optionText'>Photo / Video</span>
                    </div>
                    <div className='option'>
                        <span className='optionText'>Feeling /Activity</span>
                    </div>
                    <div className="option">
                        <span className='optionText'>Go Live</span>
                    </div>
                </div>
                <button className='button'>Post</button>
            </div>
        </div>

    </div>
  )
}

export default SharePost