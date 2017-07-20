import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';


export default combineReducers({
  events: eventsReducer,
});