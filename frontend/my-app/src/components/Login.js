import React from 'react'
import '../css/Login.css'

function Login() {
  return (
    <>
      <p>Hello World</p>
      <div className="form">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" id="username" />
            <label htmlFor="username">Username</label>

            <input type="text" placeholder="Email" id="email" />
            <label htmlFor="email">Email</label>

            <input type="password" placeholder="Password" id="password" />
            <label htmlFor="password">Password</label>

            <button type="submit">Login</button>
            <p>Passwords must match.</p>
          </form>
      </div>
    </>
  )
}

export default Login