import React, { Component } from "react";
import Feesclass from "./Feesclass";

class Preclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      index: 0,
    };
  }

 prev() {
    this.setState({
        index: this.state.index -1
    })
  };

  Nextbtn() {
    this.setState({
        index: this.state.index +1
    })
  };

  render() {
    return (
      <div>
        <span>{this.state.data[this.state.index].name}</span>
        <span>{this.state.data[this.state.index].timePeriod}</span>
        <Feesclass selCourse={ this.state.data[this.state.index].name} />
        <br></br>
        <button className="next" onClick={() =>this. prev()} disabled={this.state.index == 0}>Previous</button>
        <button onClick={() =>this. Nextbtn()} disabled={this.state.index ==  this.state.data.length - 1}>Next</button>
      </div>
    );
  }
}

export default Preclass;

// import React, { Component } from "react";

// class Preclass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: [
//         {
//           name: "Full Stract Devloper",
//           timePeriod: " 12 month",
//         },
//         {
//           name: "React Devloper",
//           timePeriod: " 6 month",
//         },
//         {
//           name: "UL/UX  design",
//           timePeriod: " 3 month",
//         },
//       ],
//       index: 0,
//     };
//   }
// //    prev = () => {
// //     this.setState({

// //         index:this.index-1
// //     })
// //   };

// //    Nextbtn = () => {
// //      this.setState({
// //         index:this.index-1
// //     })
// //   };
//   render() {
//     return(
//         <div>
//       <span>{ this.state.data[this.index].name}</span>
//       <span>{ this.state.data[this.index].timePeriod}</span>
//       <span>{ this.state.data[this.index].frees}</span>
//       {/* <Free selCourse={ this.state.data[this.index].name} /> */}
//       <br></ br>
//       {/* <button className="next" onClick={() => this.prev()} disabled={this.index == 0}> {" "} Previous{" "}</button> */}
//       {/* <button onClick={() =>this. Nextbtn()} disabled={this.index ==  this.state.data.length - 1}>  Next</button> */}
//     </div>
//     );

//   }

// }

// export default Preclass;
