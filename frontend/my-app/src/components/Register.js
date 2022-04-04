import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import { useRef } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()

  const handleClick = async (e) => {
    e.preventDefault()
    if(confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Your passwords do not match. Please try again.")
    } else {
      const user = {
        email:email.current.value,
        username: username.current.value,
        password:password.current.value,
      }
      try {
      await axios.post("http://localhost:4000/session/register", user)
      navigate('/')

      } catch(err) {

      }
    }
  }

  return (
    <div className="form">
        <h1>Register</h1>
        <form onSubmit={handleClick}>
          <input type="text" placeholder="Username" id="username" ref={username} required />
          <label htmlFor="username">Username</label>

          <input type="email" placeholder="Email" id="email" ref={email} required />
          <label htmlFor="email">Email</label>

          <input type="password" placeholder="Password" id="password" ref={password} required />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
            required
            ref={confirmPassword}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button type="submit">Register</button>
          <p>Passwords must match.</p>
        </form>
    </div>
  )
}

export default Register