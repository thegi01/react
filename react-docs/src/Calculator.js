import React from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature : ''
        }
    }
        
    handleChange(event){
        this.setState({
            temperature: event.target.value
        });
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <label>
                    <input 
                        type="text" 
                        // value={temperature}
                        onChange={this.handleChange} />
                </label>
                <BoilingVerdict 
                        celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }

}
export default Calculator;
