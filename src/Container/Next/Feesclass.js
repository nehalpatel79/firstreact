import React, { Component } from 'react';

class Feesclass extends Component {
   
    render() {
        const feesData={
        "Full Stract Devloper":75000,
        "React Devloper":50000,
        "UL/UX  design":30000

    }
        return (
            <div>
                <span>Fees :</span>
                <span>{feesData[this.props.selCourse]}</span>
            </div>
        );
    }
}

export default Feesclass;