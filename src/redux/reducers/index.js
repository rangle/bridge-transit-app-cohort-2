import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';
import { routerReducer } from 'react-router-redux';
import { searchInput } from './search.reducer';

export default combineReducers({
  searchInput,
  events: eventsReducer,
  routing: routerReducer
});
