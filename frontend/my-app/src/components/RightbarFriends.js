import React from 'react'

export const RightbarFriends = ({ user }) => {
  return (
    <div>
        <ul className="rightbarFriends">
          <li className="rightbarFriend">
            <img className='rightbarFriendImg' src={user.profilePic} alt="" />
            <span className='rightbarFriendName'>{user.username}</span>
          </li>
        </ul>
    </div>
  )
}
