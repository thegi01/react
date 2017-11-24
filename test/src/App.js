import React, { Component } from 'react';
import './App.css';

import Toggle from'./Toggle';
import LoginButton from'./LoginButton';

import Greeting from'./Greeting';
import LoginControl from'./LoginControl';
import MailBox from'./MailBox';

class App extends Component {
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

            <section className="section">
                <h2>1. Handling Events</h2>

                <h3>A. Toggle</h3>
                <Toggle />

                <h3>B. LoginButton</h3>
                <LoginButton />
            </section>

            <section className="section">
                <h2>2. Conditional Rendering</h2>

                <h3>A. Greeting </h3>
                <Greeting isLoggedIn={false} />

                <h3>B. Element Variables : LoginControl </h3>
                <LoginControl />

                <h3>C. Inline If with Logical && Operator : MailBox</h3>
                <MailBox unreadMessage={messages} />

                <h3>D. Inline If-Else with Conditional Operator</h3>
            </section>
          

        </div>
      </div>
    );
  }
}

export default App;
