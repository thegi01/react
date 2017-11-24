import React from 'react';

class EssayForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value : 'Please write an essay about your favorite DOM element.',
            essay : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({
            essay : this.state.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name :
                    <textarea value={this.state.value} onChange={this.handleChange} style={{ width: '100%'}} />
                </label>
                <input type="submit" value="Submit" />
                <div style={{marginTop: '10px'}}>Youe message : <p>{this.state.essay}</p></div>
            </form>
            
        );
    }
}

export default EssayForm;
