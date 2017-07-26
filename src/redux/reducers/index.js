import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';
import { routerReducer } from 'react-router-redux';
import { searchInput } from './search.reducer';
import categories from './categories.reducer';

export default combineReducers({
  searchInput,
  categories,
  events: eventsReducer,
  routing: routerReducer,
});