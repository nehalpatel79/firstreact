import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = { count: 0};
    this.card ={colour:"green"};
  }

  change =()=>{
    this.setState((v) =>({
        count: v.count + 1,
    }))
    
  };

   changeaa =()=>{
    this.setState((v) =>({
        count: v.count -1,
    }))
    
  };

  handleclick =() =>{
     this.setState({color: "blue"});
  }
  

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.change}>+</button>
        <button onClick={this.changeaa}>-</button>
        <br/>
         <h2>{this.card.colour}</h2>
        <button onClick={this.handleclick}>Click me</button>
        <br></br>
      </div>
    );
  }
}

export default State;
