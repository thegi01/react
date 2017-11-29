import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import IntroducingJSX from './IntroducingJSX';
import ComponentsAndProps from './ComponentsAndProps';
import StateAndLifecycle from './StateAndLifecycle';
import HandlingEvents from './HandlingEvents';
import ConditionalRendering from './ConditionalRendering';
import ListAndKeys from './ListAndKeys';
import Forms from './Forms';
import LiftingStateUp from './LiftingStateUp';
import CompositionVsInheritance from './CompositionVsInheritance';
import ThinkingInReact from './ThinkingInReact';

class App extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isHidden : true            
        }
    }

    handleChange(event){
        this.setState({
            isHidden : event.target.checked
        });
    }

    handleClick(){
        this.setState({
            isHidden : true
        });
    }

    render(){
        return(
            <Router>
                <div className="app">

                    <nav className="nav">
                        <label className="button">
                            <input type="checkbox" checked={this.state.isHidden} onChange={this.handleChange} />
                            <h1>React Docs</h1>
                        </label>
                        <section className="menu" data-hidden={this.state.isHidden}>
                            <h2>Quick Start</h2>
                            <ul onClick={this.handleClick}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/introducingjsx">IntroducingJSX</Link></li>
                                <li><Link to="/componentsandprops">Components And Props</Link></li>
                                <li><Link to="/stateandlifecycle">State and Lifecycle</Link></li>
                                <li><Link to="/handlingevents">Handling Events</Link></li>
                                <li><Link to="/conditionalrendering">Conditional Rendering</Link></li>
                                <li><Link to="/listandkeys">List And Keys</Link></li>
                                <li><Link to="/forms">Forms</Link></li>
                                <li><Link to="/liftingstateup">Lifting State Up</Link></li>
                                <li><Link to="/compositionvsinheritance">Composition vs Inheritance</Link></li>
                                <li><Link to="/thinkinginreact">Thinking In React</Link></li>
                            </ul>
                        </section>
                    </nav>

                    <div className="body">
                        <Route exact path="/" component={Home} />
                        <Route path="/introducingjsx" component={IntroducingJSX} />
                        <Route path="/componentsandprops" component={ComponentsAndProps} />
                        <Route path="/stateandlifecycle" component={StateAndLifecycle} />
                        <Route path="/handlingevents" component={HandlingEvents} />
                        <Route path="/conditionalrendering" component={ConditionalRendering} />
                        <Route path="/listandkeys" component={ListAndKeys} />
                        <Route path="/forms" component={Forms} />
                        <Route path="/liftingstateup" component={LiftingStateUp} />
                        <Route path="/compositionvsinheritance" component={CompositionVsInheritance} />
                        <Route path="/thinkinginreact" component={ThinkingInReact} />
                    </div>

                </div>
            </Router>
        );
    }   
}

export default App;