import { combineReducers } from 'redux';
import { eventsReducer } from './event.reducer';
import { routerReducer } from 'react-router-redux';
import { searchInput } from './search.reducer';
import { categoryReducer } from './category.reducer';

export default combineReducers({
  searchInput,
  category: categoryReducer,
  events: eventsReducer,
  routing: routerReducer,
});