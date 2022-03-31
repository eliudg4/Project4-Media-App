import Navi from "./Navi";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Timeline from "./Timeline";
import React from 'react'
import '../css/home.css'

const Home = () => {
  return (
    <>
        <Navi />
        <div className="homeContainer">
            <Leftbar />
            <Timeline />
            <Rightbar />
        </div>
    </>
  )
}

export default Home