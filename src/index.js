import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browswerHistory} from 'react-router';
// router top lvl object, routs, broswer je odgovoran sta ce reci Router da router prati url

import requireAuth from './components/require_auth';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';
import Async from './middlewares/async';






const createStoreWithMiddleware = applyMiddleware(Async)(createStore); //kada akcija dobije dispatch pobrini se da prodje kroz Async middleware

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history = { browswerHistory}>
    <Route path="/" component={App}>
      <Route path = "resources" component = {requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
