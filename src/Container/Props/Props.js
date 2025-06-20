import React, { Component } from 'react';

class Props extends Component {
constructor(props){
super(props);
}

    render() {
        return (
            <div>
             {this.props.a}   
            </div>
        );
    }
}

export default Props;