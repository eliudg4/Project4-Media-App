import React, { useContext } from 'react'
import '../css/leftbar.css'
import { Person, Message, Bookmark, Store, Today  } from '@mui/icons-material'
import { SessionContext } from '../context/SessionContext'

const Leftbar = () => {

    const {user} = useContext(SessionContext)
  return (
    <div className='leftbar'>
        <div className='leftbarContainer'>
            <ul className="leftbarLists">
                <li className="leftbarItem">
                    <img className="postUserImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" />
                    <span>{user.username}</span>
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
            <span className='gamesHeader'>Games</span>
            <ul className="leftbarGames">
                <li className="leftbarGame">
                    <img src="https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag" alt="" className='leftbarGameImg' />
                    <span className='gameName'>8 Ball Pool</span>
                </li>
                <li className="leftbarGame">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/64/FarmVille_logo.png" alt="" className='leftbarGameImg' />
                    <span className='gameName'>Farmville</span>
                </li>
                <li className="leftbarGame">
                    <img src="https://i.ytimg.com/vi/EUJb1BD63ME/maxresdefault.jpg" alt="" className='leftbarGameImg' />
                    <span className='gameName'>Tetris</span>
                </li>
                <li className="leftbarGame">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlY4qMyr7-kIQjTE4jaAPbGoWtJ--vS64eQ&usqp=CAU" alt="" className='leftbarGameImg' />
                    <span className='gameName'>Pac-Man</span>
                </li>
                <li className="leftbarGame">
                    <img src="https://image.uniqlo.com/UQ/ST3/eu/imagesother/2020/ut/gaming/pc-ut-hero-mario-35.jpg" alt="" className='leftbarGameImg' />
                    <span className='gameName'>Super Mario</span>
                </li>
                <li className="leftbarGame">
                    <img src="https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0" alt="" className='leftbarGameImg' />
                    <span className='gameName'>Candy Crush</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Leftbar