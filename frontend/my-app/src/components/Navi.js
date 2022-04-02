import React from 'react'
import  { Navbar, Nav,  }  from 'react-bootstrap/'
import '../css/navbar.css'
import { Message, Notifications  } from '@mui/icons-material'

function Navi() {
  return (
    <>
       <Navbar bg='primary' variant='dark' sticky='top' expand='lg' collapseOnSelect>
         <Navbar.Brand>
             {/* <img src={logo} /> */}
             BackShow
         </Navbar.Brand>

         <Navbar.Toggle />
         <Navbar.Collapse>
             <input style={{borderRadius: "32px", height: "32px", width: "25%"}}placeholder='Search for friends'></input>

         <Nav className='container-fluid'>
            <Nav.Link className='ms-auto' href='home'>Junior Guzman</Nav.Link>
           
           <Nav.Link href='portfolio'><Notifications /></Nav.Link>
           <Nav.Link href='about'><Message /></Nav.Link>
           <Nav.Link href='contact'>Logout</Nav.Link>
         </Nav>
         </Navbar.Collapse>
         
      </Navbar>
    </>
  )
}

export default Navi