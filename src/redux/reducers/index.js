import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  events: eventsReducer,
  routing: routerReducer,
});
