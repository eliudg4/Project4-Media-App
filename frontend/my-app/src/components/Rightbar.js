import React from 'react'
import '../css/rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarContainer">
          <div className="sponsorHeader">
              <span className="sponsorName">Sponsored</span>
          </div>
          <div className="sponsorBody">
            <img src="https://livesportsreviews.com/wp-content/uploads/2019/11/NIKE-1.png" alt="" className="sponsorImg" />
          </div>
        </div>
        <hr className='rightbarHr' />
    </div>
  )
}

export default Rightbar