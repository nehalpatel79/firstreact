import React, { useState } from "react";

function Next() {
  // const syllabus = [
  //   {
  //     name: "Full Stract Devloper",
  //     timePeriod: " 12 month",
  //   },
  //   {
  //     name: "React Devloper",
  //     timePeriod: " 6 month",
  //   },
  //   {
  //     name: "UL/UX  design",
  //     timePeriod: " 3 month",
  //   }
  // ];
  const [currentsyllabus,setCurrentsyllabus] =useState(0)

  const prev = () => {
    setCurrentsyllabus(currentsyllabus-1)
  };

  const Nextbtn = () => {
     setCurrentsyllabus(currentsyllabus+1)
  };

  return (
    <div>
        
        {/* <span>{syllabus[currentsyllabus].name}</span>
        <span>{syllabus[currentsyllabus].timePeriod}</span><br></br>
      <button className="next" onClick={() => prev() } disabled={currentsyllabus==0}> Previous </button>
      <button onClick={() => Nextbtn()} disabled={currentsyllabus==syllabus.length-1}>Next</button> */}
    </div>
  );
}

export default Next;
