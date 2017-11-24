import React from 'react';

class NameForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value : '',
            isShow : false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value : event.target.value,
            isShow: false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            isShow: true
        });
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name :
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                { this.state.isShow &&
                    <p>Your Name : {this.state.value}</p>
                }
            </form>
        );
    }
}

export default NameForm;
