import React, { useContext } from 'react'
import  { Navbar, Nav,  }  from 'react-bootstrap/'
import '../css/navbar.css'
import { Message, Notifications, Search  } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { SessionContext } from '../context/SessionContext'

function Navi() {
  const {user} = useContext(SessionContext)

  return (
    <>
       <Navbar bg='primary' variant='dark' sticky='top' expand='lg' collapseOnSelect>
         <Navbar.Brand>
             {/* <img src={logo} /> */}
             <Link to='/home' style={{textDecoration: "none", color: "white", fontSize: "28px", fontWeight: "500", marginLeft: "15px"}}>
             Thoughtify
             </Link>
         </Navbar.Brand>

         <Navbar.Toggle />
         <Navbar.Collapse>
             <input style={{borderRadius: "32px", height: "32px", width: "25%", padding: "15px"}}
             placeholder='Search for friends'></input>

         <Nav className='container-fluid'>
            <Nav.Link className='ms-auto' href={`/profile/${user.username}`}>{user.username}</Nav.Link>
           
           <Nav.Link href='portfolio'><Notifications /></Nav.Link>
           <Nav.Link href='about'><Message /></Nav.Link>
           <Nav.Link href='/'>Logout</Nav.Link>
         </Nav>
         </Navbar.Collapse>
         
      </Navbar>
    </>
  )
}

export default Navi