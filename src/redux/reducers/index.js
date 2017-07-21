import { combineReducers } from 'redux';
import eventsReducer from './event-reducer';

export const recipe = (state = [], action) => {
  switch(action.type) {
    case 'PRINT_TEST_ACTION':
      return action.payload;
  }
  return state;
}

export default combineReducers({
  recipe
});