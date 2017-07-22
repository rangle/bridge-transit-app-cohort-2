import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';
import { routerReducer } from 'react-router-redux';

export const recipe = (state = [], action) => {
  switch(action.type) {
    case 'PRINT_TEST_ACTION':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  recipe,
  events: eventsReducer,
  routing: routerReducer
});
