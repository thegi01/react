import React, {Component} from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
    render(){
        return <button type="button" style={{color : this.props.color}} className="Button"> {this.props.children} </button>
    }
}

export default Button;