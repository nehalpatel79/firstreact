import React, { useState } from 'react'

function Password() {

    const [show,setShow] =useState (false)

    const handerclick =() => {
      setShow(!show)
    }

  return (
    <div className='password'>
        <label>Password : </label>
       <input placeholder='Enter Password' type={show ? "text" : "password"}></input>
       <button onClick={() => handerclick()}>{show ? <i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i>}</button>
    </div>
  )
}

export default Password