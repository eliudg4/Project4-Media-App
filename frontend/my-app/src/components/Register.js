import React from 'react'

const Register = () => {
  return (
    <div className="form">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" id="username" />
          <label htmlFor="username">Username</label>

          <input type="text" placeholder="Email" id="email" />
          <label htmlFor="email">Email</label>

          <input type="password" placeholder="Password" id="password" />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
          />
          <label htmlFor="passwordConfirm">Confirm password</label>

          <button type="submit">Register</button>
          <p>Passwords must match.</p>
        </form>
    </div>
  )
}

export default Register