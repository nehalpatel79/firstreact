import React, { useState } from 'react'

function Incrementdec() {
    const [count,setCount] =useState(0)

    const increment =() =>{
        if (count<5){
            setCount(count+1)
        }
    }

     const decrement =() =>{
         if (count>0){
            setCount(count-1)
        }
       
    }

  return (
    <div>
        <p>{count }</p>
        <button onClick={() => increment() } disabled ={count===5}>+</button>
        <button onClick={() => decrement()} disabled ={count===0}>-</button>
    </div>
  )
}

export default Incrementdec