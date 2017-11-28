import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import Main from './Main';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(
    <Router history = {browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={App} />
            <Route path="todo" component={Todo} />
        </Route>
    </Router>, 
    document.getElementById('root'));*/


/*render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
*/
registerServiceWorker();
