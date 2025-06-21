import React, { useState } from "react";

function Countufun() {
  const [name, setName] = useState("india");
  const [Population, setPopulation] = useState("143.81crores");
  const [Capital, setCapital] = useState("NewDelhi");
  const [currency, setcurrency] = useState("Rupee");

  const handleclick = () => {
    setName("US");
    setPopulation("40.4 lakhs");
    setCapital("Washington");
    setcurrency("Dollar");
  };

  return (
    <div>
      <h1>My Country is {name}</h1>
      <p>Population :{Population}</p>
      <p>Capital:{Capital}</p>
      <p> currency:{currency}</p>
      <button onClick={() => handleclick()}>Change City</button>
    </div>
  );
}

export default Countufun;
