import React, { Component } from 'react';

class City extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"Surat",
            Population:"69.4 lakhs",
            Area:"Adajan",
            famousfood:"Locho"
        };

      

    }
      handleclick(){
            this.setState ({name:"rajkot"})
            this.setState ({Population:"50.4 lakhs"})
            this.setState ({Area:" Race Course"})
            this.setState ({famousfood:"Fafda-Jalebi"})
        }
    render() {
        return (
            <div>
              <h1>My City is {this.state.name}</h1>
              <p>Population :{this.state.Population}</p>
              <p>Area :{this.state.Area}</p>
              <p>famousfood :{this.state.famousfood}</p>
              <button onClick={() =>this. handleclick()}>Change City</button>
            </div>
        );
    }
}

export default City;