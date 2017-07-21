import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import rootReducer from './redux/reducers';
// import rootEpic from './redux/epics';
import App from './components/App';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './redux/epics'

import './index.css';

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware,epicMiddleware),
);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
