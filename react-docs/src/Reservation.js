import React from 'react';

class Reservation extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isGoing : true,
            numberOfGuetsts : 2
        }

        this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(event){
        const _target = event.target;
        const _value = _target.type==='checkbox' ? _target.checked : _target.value;
        const _name = _target.name;

        this.setState({
            [_name] : _value
        });
    }
    
    render(){
        return(
            <form>
                <label>
                    Is Going : 
                    <input 
                        type="checkbox" 
                        name="isGoing"
                        // checked={this.state.isGoing}
                        onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input 
                        type="number"
                        name="numberOfGuetsts"
                        // value={this.state.numberOfGuetsts}
                        onChange={this.handleChange} />
                </label>

                <div>
                    <h6 style={{marginTop: '20px'}}>[Result]</h6>
                    <p> isGoing : {this.state.isGoing.toString()} </p>
                    <p> numberOfGuetsts : {this.state.numberOfGuetsts} </p>
                </div>
            </form>
        );
    }
}

export default Reservation;
