import React, { useState } from "react";

function Cityfun() {
  const [name, setName]= useState("surat");
 const [Population, setPopulation] = useState("50.81crores");
  const [Area, setArea] = useState("Adajan");
  const [famousfood, setfamousfood] = useState("Locho");


  const handleclick = () => {
    setName("rajkot");
    setPopulation("10.4 lakhs");
    setArea("Race Course");
    setfamousfood("Fafda-Jalebi");
  };

  return (
    <div>
      <h1>My City is {name}</h1>
      <p>Population :{Population}</p>
      <p>Area:{Area}</p>
      <p>famousfood:{famousfood}</p>
      <button onClick={() => handleclick()}>Change City</button>
    </div>
  );
}

export default Cityfun;
