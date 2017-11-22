import React, { Component } from 'react';

class ClassComponent extends Component{

    render(){
        return <p>It's, {this.props.name}</p>;
    }

}

export default ClassComponent;