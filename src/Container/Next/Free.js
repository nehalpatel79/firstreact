import React from 'react'

function Free(props) {
    const feesData={
        "Full Stract Devloper":75000,
        "React Devloper":50000,
        "UL/UX  design":30000

    }
    console.log(feesData[props.selCourse]);
    
  return (
    <div>
        <h3>fees :{feesData[props.selCourse]}</h3>
    </div>
  )
}

export default Free