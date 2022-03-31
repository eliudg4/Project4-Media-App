import React from 'react'
import '../css/timeline.css'
import SharePost from './SharePost'
import Post from './Post'

const Timeline = () => {
  return (
    <div className='timeline'>
        <div className="timelineContainer">
            <SharePost />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  )
}

export default Timeline