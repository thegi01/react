import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

ReactDOM.render(
  <Routes history={browserHistory} />, document.getElementById('root')
);

