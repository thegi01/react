import React from 'react';


class LoggingButton extends React.Component {

  handleClick = (e) => {
    console.log('this is:', this);
    console.log('e is:', e);
  }
    

  render() {
    return ([
      <button onClick={ (e) => this.handleClick(e) } key="1">
        e
      </button>,
      <button onClick={ this.handleClick.bind(this) } key="2">
        bind this
      </button>
      ]
    );
  }
}

export default LoggingButton;
