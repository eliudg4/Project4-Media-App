import React from 'react'
import '../css/timeline.css'
import SharePost from './SharePost'
import Post from './Post'
import { Posts } from '../data.js'

const Timeline = () => {
  return (
    <div className='timeline'>
        <div className="timelineContainer">
            <SharePost />
            {Posts.map(p => (
              <Post key={p.id} post={p} />
            ))}
        </div>
    </div>
  )
}

export default Timeline