import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './redux/epics'
import rootReducer from './redux/reducers';
import App from './components/App';
import { EventsByCategoryPage } from './components/EventsByCategoryPage';
import { Home } from './components/Home';
import './styles/css/index.css';

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleware,epicMiddleware),
);

const history = syncHistoryWithStore(browserHistory, store);

const ReduxApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ Home } />
        <Route path="/category/:categoryID" component={ EventsByCategoryPage }/>
        <Route path="/event/:eventID" component={ EventDetails }/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
