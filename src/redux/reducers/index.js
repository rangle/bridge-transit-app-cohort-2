import { combineReducers } from 'redux';
import { eventsReducer } from './events.reducer';
import { eventReducer } from './event.reducer';
import { routerReducer } from 'react-router-redux';
import { searchInput } from './search.reducer';
import { categoryReducer } from './category.reducer';
import { addressReducer } from './address.reducer';
import { geolocationReducer } from './geolocation.reducer';

export default combineReducers({
  searchInput,
  category: categoryReducer,
  events: eventsReducer,
  event: eventReducer,
  routing: routerReducer,
  address: addressReducer,
  geolocation: geolocationReducer,
});