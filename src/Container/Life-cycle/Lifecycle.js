import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  // Didmount

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentDidMount() {
    this.timeRef=setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate");
    console.log("previous state:",prevState.time.toLocaleTimeString());
    console.log("current state:",this.state.time.toLocaleTimeString());  
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
    
    clearInterval(this.timeRef)

  }

  render() {
    return (
      <div>
        <h1> {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Lifecycle;
