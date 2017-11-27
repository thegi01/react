import React from 'react';
import FancyBorder from './FancyBorder';

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h5 className="Dialog-title"  style={{marginTop:'20px'}}>
                {props.title}
            </h5>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}


class SignUpDialog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }


    handleChange(event){
        this.setState({
            login: event.target.value
        });
    }

    handleSignUp(){
        alert(`Welcome aboard, ${this.state.login}!`)
    }

    render(){
        return(
            <Dialog 
                title="Mars Exploration Program"
                message="How should we refer to you?" >
                <input
                    type="text"
                    onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

}

export default SignUpDialog;