import React from 'react';
import Calculator2 from './Calculator2';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperaturInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature : ''
        }
    }

    handleChange(event){
        this.setState({
            temperature : event.target.value
        });
    }
    
    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input 
                    // value={temperature}
                    onChange={this.handleChange} />
                <div>
                    {scaleNames[scale]} : {temperature} 
                </div>
            </fieldset>
        );
    }

}

export default TemperaturInput;
