import React from 'react'
import '../css/userpage.css'
import Navi from '../components/Navi'
import UserPageHeader from './UserPageHeader'
import Timeline from './Timeline'

const UserPage = () => {
  return (
    <div>
        <Navi />
        <div className="homeUserPage">
            <UserPageHeader />
            <Timeline username="junior"/>
            {/* <Rightbar /> */}
        </div>
    </div>
  )
}

export default UserPage