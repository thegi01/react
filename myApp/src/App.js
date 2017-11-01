import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DangerButton from './DangerButton';

class App extends Component {
    handleClick = () => {
        import('./moduleA')
            .then( ({moduleA}) => {
                console.log({moduleA});
            })
            .catch( err => {
                console.log(err);
            });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            <DangerButton/>
            <button type="button" onClick={this.handleClick}> Load </button>
        </p>
      </div>
    );
  }
}

export default App;
