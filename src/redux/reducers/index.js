import { combineReducers } from 'redux';

export const recipe = (state = [], action) => {
  switch(action.type) {
    case 'PRINT_TEST_ACTION':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  recipe
});