import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
         <form id='form2'>
        <h2>Login</h2>
        <label for=""> Email</label> <br></br>
        <input id="email" type="email" name="email" placeholder="Enter email"></input> <br></br>
        <label for="">Password</label> <br></br>
        <input id="pass" type="password" placeholder="Enter Password"></input> <br></br>
        <input type="submit" value="Login"></input>
    </form>
    </div>
  )
}

export default Login