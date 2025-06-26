import React, { useState } from "react";
import Free from "./Free";

function Add() {
  const data = [
    {
      name: "Full Stract Devloper",
      timePeriod: " 12 month",
    },
    {
      name: "React Devloper",
      timePeriod: " 6 month",
    },
    {
      name: "UL/UX  design",
      timePeriod: " 3 month",
    },
  ];
  const [currentsyllabus, setCurrentsyllabus] = useState(0);

  const prev = () => {
    setCurrentsyllabus(currentsyllabus - 1);
  };

  const Nextbtn = () => {
    setCurrentsyllabus(currentsyllabus + 1);
  };

  return (
    <div>
      <span>{data[currentsyllabus].name}</span>
      <span>{data[currentsyllabus].timePeriod}</span>
      <span>{data[currentsyllabus].frees}</span>
      <Free selCourse={data[currentsyllabus].name} />
      <br></ br>
      <button className="next" onClick={() => prev()} disabled={currentsyllabus == 0}> {" "} Previous{" "}</button>
      <button onClick={() => Nextbtn()} disabled={currentsyllabus == data.length - 1}>  Next</button>
    </div>
  );

  // <div >
  //    {
  //     data.map((v,i)=>(
  //         <div key={i}>
  //            {v.name}
  //            {v.timePeriod}
  //         </div>
  //     ))
  //     }
  // </div>
}

export default Add;
