import React, { Component } from 'react';
import './App.css';

import IntroducingJSX from './IntroducingJSX';
import ComponentsAndProps from './ComponentsAndProps';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Docs</h1>
        </header>
        <div className="App-content">
            <h2>IntroducingJSX</h2>
            <IntroducingJSX />

            <h2>ComponentsAndProps</h2>
            <ComponentsAndProps />

            <h3>State and Lifecycle</h3>
            <Clock />


            
        </div>
      </div>
    );
  }
}

export default App;
