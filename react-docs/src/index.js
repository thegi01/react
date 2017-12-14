import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// import { HashRouter, Route, Switch  } from 'react-router-dom';

import './App.css';

import Page from './Page';
import Home from './Home';
import ComponentsAndProps from './ComponentsAndProps';

ReactDOM.render((
    <Router >
        <Route path = "/" component = {Page}>
            <IndexRoute component = {Home} />
            <Route path="/componentsandprops" component={ComponentsAndProps} />
        </Route>
    </Router>
    ), document.getElementById('root') );

registerServiceWorker();
