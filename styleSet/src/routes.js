import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import DottedBox from './DottedBox';
import Box from './Box';
import DashedBox from './DashedBox';
import OutsetBox from './DashedBox';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/dottedbox" component={DottedBox} />
    <Route path="/box" component={Box} />
    <Route path="/dashedbox" component={DashedBox} />
    <Route path="/outsetbox" component={DashedBox} />
  </Router>
);
