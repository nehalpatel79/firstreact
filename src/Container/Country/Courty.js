import React, { Component } from "react";

class Courty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "India",
      Population: "143.81crores",
      Capital: "NewDelhi",
      currency: "Rupee",
    };
  }
  handleclick(){
     this.setState ({Name:"US"})
            this.setState ({Population:"40.4 lakhs"})
            this.setState ({Capital:" Washington"})
            this.setState ({currency:"Dollar"})
  }

  render() {
    return (
      <div>
        <h1>My Country Is {this.state.Name}</h1>
        <p>Population :{this.state.Population}</p>
        <p>Capital:{this.state.Capital}</p>
        <p>currency:{this.state.currency}</p>
         <button onClick={() =>this. handleclick()}>Change City</button>
      </div>
    );
  }
}

export default Courty;
