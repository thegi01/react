import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './App.css';

import IntroducingJSX from './IntroducingJSX';
import ComponentsAndProps from './ComponentsAndProps';
import Todo from './Todo';

import Toggle from'./Toggle';
import LoginButton from'./LoginButton';

import Greeting from'./Greeting';
import LoginControl from'./LoginControl';
import MailBox from'./MailBox';

import NumberList from'./NumberList';
import Blog from'./Blog';

import NameForm from'./NameForm';


class App extends Component {
  render() {

    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Docs</h1>
        </header>
        <div className="App-content">
            <section className="compnt">
                <div className="compnt-header">
                    <h2>IntroducingJSX</h2>
                </div>
                <div className="compnt-body">
                    <IntroducingJSX />
                </div>
            </section>

            <section className="compnt">
                <div className="compnt-header">
                    <h2>ComponentsAndProps</h2>
                </div>
                <div className="compnt-body">
                    <ComponentsAndProps />
                </div>
            </section>
            
            {/*<h2>State and Lifecycle</h2>*/}

            <section className="compnt">
                <div className="compnt-header">
                    <h2>Handling Events</h2>
                </div>
                <div className="compnt-body">
                    <h3>A. Toggle</h3>
                    <Toggle />
                    <h3>B. LoginButton</h3>
                    <LoginButton />
                </div>
            </section>

            <section className="compnt">
                <div className="compnt-header">
                    <h2>Conditional Rendering</h2>
                </div>
                <div className="compnt-body">
                    <h3>A. Greeting </h3>
                    <Greeting isLoggedIn={false} />

                    <h3>B. Element Variables : LoginControl </h3>
                    <LoginControl />

                    <h3>C. Inline If with Logical && Operator : MailBox</h3>
                    <MailBox unreadMessage={messages} />

                    <h3>D. Inline If-Else with Conditional Operator</h3>
                </div>
            </section>

            <section className="compnt">
                <div className="compnt-header">
                    <h2>List and Key</h2>
                </div>
                <div className="compnt-body">
                    <h3>NumberList</h3>
                    <NumberList numbers={[1, 2, 3, 4, 5]} />

                    <h3>Blog</h3>
                    <p>Keys Must Only Be Unique Among Siblings</p>
                    <Blog posts={posts} />
                </div>
            </section>

            <section className="compnt">
                <div className="compnt-header">
                    <h2>Forms</h2>
                </div>
                <div className="compnt-body">
                    <h3>Controlled Components</h3>
                    <NameForm />
                </div>
            </section>

            <section className="compnt">
                <div className="compnt-header">
                    <h2>Example</h2>
                </div>
                <div className="compnt-body">
                    <h3>Example : Todo</h3>
                    <Todo />
                </div>
            </section>
            
        </div>
      </div>
    );
  }
}

export default App;
