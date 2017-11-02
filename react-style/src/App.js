import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import CssStylesheet from './CssStylesheet';
import InlineStyle from './InlineStyle';
import CssModules from './CssModules';
import StyledComponents from './StyledComponents';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Style 4 way</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="APP-style">
            <h2>1. Css Stylsheet</h2>
            <CssStylesheet/>
            <h2>2. Inline Style</h2>
            <InlineStyle/>
            <h2>3. Css Moudes </h2>
            <CssModules/>
            <h2>4. Styled Components</h2>
            <StyledComponents />
        </div>
      </div>
    );
  }
}

export default App;
