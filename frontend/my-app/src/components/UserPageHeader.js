import React from 'react'
import { Person, Message, Bookmark, Store, Today  } from '@mui/icons-material'
import '../css/userpage.css'

const UserPageHeader = () => {
  return (
    <div className='leftbar'>
        <div className='leftbarContainer'>
            <div className="userHeader">
                <img className="userPageImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" />
                <span>Junior Guzman</span>
            </div>
            <ul className="leftbarLists">
                <li className="leftbarItem">
                    <img className="postUserImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" />
                    <span>Junior Guzman</span>
                </li>
                <li className="leftbarItem">
                    <Person className='leftbarIcon' />
                    <span>Friends</span>
                </li>
                <li className="leftbarItem">
                    <Message className='leftbarIcon' />
                    <span>Messages</span>
                </li>
                <li className="leftbarItem">
                    <Bookmark className='leftbarIcon' />
                    <span>Saved Items</span>
                </li>
                <li className="leftbarItem">
                    <Store className='leftbarIcon' />
                    <span>Marketplace</span>
                </li>
                <li className="leftbarItem">
                    <Today className='leftbarIcon' />
                    <span>Events</span>
                </li>
            </ul>
            <hr className='leftbarHr' />
        </div>
    </div>
  )
}

export default UserPageHeader