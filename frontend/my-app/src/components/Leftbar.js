import React from 'react'
import '../css/leftbar.css'

const Leftbar = () => {
  return (
    <div className='leftbar'>
        <div className='leftbarContainer'>
            <ul className="leftbarLists">
                <li className="leftbarItem">
                    <span>Junior</span>
                </li>
                <li className="leftbarItem">
                    <span>Friends</span>
                </li>
                <li className="leftbarItem">
                    <span>Messages</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Leftbar