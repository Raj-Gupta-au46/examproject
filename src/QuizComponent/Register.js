import React, { useState } from 'react'
import "./Register.css"


const Register = () => {
  const[user,setUser]=useState({
    name:"",email:"",phone:"",password:""
  })
  let name,value
  

  const handleInput=(e)=>{
    //console.log(e)
    name=e.target.name;
    value=e.target.value
    
    setUser({...user,[name]:value})
    console.log(user)
  }

  const PostData = async(e)=>{
    e.preventDefault()
  
    const {name,email,phone,password}=user
    const res=await fetch('/test-register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,password})
    })
    const data=await res.json();
    //console.log(data)
    if(data.status=== 500 || !data){
      window.alert('invalid Registration')
      console.log('Invalid Registration')
    }else{
      window.alert( 'Registration Successfull')
      console.log('Registration Successfull')
    }
  }

  return (
    <div>
    <form method='POST' htmlFor="name" id='form2'>
        <h2>Create Your Account</h2>
        <label>Your name</label> <br></br>
        <input onChange={handleInput} value={user.name} id="name" type="text" name="name" placeholder="Enter your name"></input> <br></br>
        <label >Mobile number</label> <br></br>
        <input onChange={handleInput} value={user.phone} id="mobile" type="number" name="phone" placeholder="Enter mobile number"></input> <br></br>
        <label > Email</label> <br></br>
        <input onChange={handleInput} value={user.email} id="email" type="email" name="email" placeholder="Enter email"></input> <br></br>
        <label >Password</label> <br></br>
        <input onChange={handleInput} value={user.password} id="pass" type="password" name='password' placeholder="Enter Password"></input> <br></br>
        <input type="submit" value="Sign Up" onClick={(e)=>PostData(e)}></input>
    </form>
    </div>
  )
}

export default Register