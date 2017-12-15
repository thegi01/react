import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import { Menu } from 'components';

class App extends Component {
    render(){
        return(
            <div className="app">
                <Menu />
                
                <section className="container">
                    <h2>Container</h2>
                    <Route exact path="/" component={Home} />
                    <Switch>
                        <Route path="/about/:name" component={About} />
                        <Route path="/about" component={About} />
                    </Switch>
                    <Route path="/posts" component={Posts} />
                </section>

            </div>
        );
    }
}

export default App;