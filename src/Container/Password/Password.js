import React, { useState } from 'react'

function Password() {

    const [password,setPassword] =  useState("");
    const [showpassword, setShowpassword] =useState(false)

   const handleclick =()=>{
    
    setShowpassword(!showpassword)
   }

  return (
    <div>
        <label>Password : </label>
        <input type={showpassword ? "text": "password"} id='password'></input>
        <button  onClick={()=> handleclick()}>{showpassword ? "show": "hide"}</button>
    </div>
  )
}

export default Password