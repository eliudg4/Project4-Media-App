import React, { useContext, useRef } from 'react'
import '../css/Login.css'
import { loginCall } from '../backendCalls' 
import { SessionContext } from '../context/SessionContext'
import { Link } from 'react-router-dom'

function Login() {
const username = useRef()
const email = useRef()
const password = useRef()
const {user, fetching, error, dispatch} = useContext(SessionContext)

  const handleClick = (e) => {
     e.preventDefault() 
     loginCall({email:email.current.value, password:password.current.value, username: username.current.value}, dispatch)
  }
  console.log(user)
  return (
    <>
      <div className="form">
          <h1>Login</h1>
          <form onSubmit={handleClick}>
            <input type="text" placeholder="Username" id="username" ref={username} />
            <label htmlFor="username">Username</label>

            <input type="email" placeholder="Email" id="email" ref={email} required />
            <label htmlFor="email">Email</label>

            <input type="password" placeholder="Password" id="password" ref={password} required />
            <label htmlFor="password">Password</label>

            <button type="submit" disabled={fetching}>Login</button>
            
            <span>Don't have an Account?</span>
            <Link to={'/register'}>
            <button>Create Account</button>
            </Link>
          </form>
      </div>
    </>
  )
}

export default Login