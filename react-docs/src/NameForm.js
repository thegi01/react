import React from 'react';

class NameForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            value : '',
            name : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
      /*  this.setState(prevState => {
            value : prevState + e.target.value
        });*/
        this.setState({
            name : this.state.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            name: this.state.value
        }, function(){
            this.setState({
                value: ''
            })
            console.log('handleSubmit', this.state)
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
            </form>
        );
    }
}

export default NameForm;
