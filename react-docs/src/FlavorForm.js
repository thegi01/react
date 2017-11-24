import React from 'react';

class FlavorForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value : 'coconut',
            selected : 'coconut'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    handleChange(event){
        this.setState({
            value : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            selected: this.state.value
        });
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Pick your favorite La Croix flavo</p>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" style={{marginLeft: '5px'}} />
                <div style={{marginTop:'10px'}}>You favorite flavo : {this.state.selected}</div>
            </form>
        );
    }
}

export default FlavorForm;
