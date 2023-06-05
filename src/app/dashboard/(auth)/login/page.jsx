"use client"

import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login Now</h1>
      <br /><br />
      <button onClick={() => signIn("google")}>Google Sign In</button>
      || 
      <button onClick={() => signOut ("google")}>Google Sign Out</button>
    </div>
  )
}

export default Login