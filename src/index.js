import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducer from './redux/reducers';
// import rootEpic from './redux/epics';
import App from './components/App';
import Foo from './components/Foo';

import './index.css';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

const history = syncHistoryWithStore(browserHistory, store);

const ReduxApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/foo" component={Foo}/> 
    </Router>
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
