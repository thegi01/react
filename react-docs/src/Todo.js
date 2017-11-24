import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            items : [],
            text: ''
        }
    }

    render(){
        // let _value = 'Add #' + this.state.items.length + 1;
        return(
            <div>
                <h4>TODO</h4>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.text} />
                    {<button>Add #{this.state.items.length + 1}</button>}
                    {/*<input type="submit" value={_value} readOnly />*/}
                </form>
            </div>
        );
    }

    handleChange(e){
        this.setState({ text: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem = {
            text : this.state.text,
            id : Date.now()
        };
        this.setState( prevSate => ({
            items: prevSate.items.concat(newItem),
            text: ''
        }));
    }
}

function TodoList(props){
    return(
        <ul>
            {props.items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}
/*class TodoList extends React.Component {
    render(){
        return(
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
*/
export default Todo;