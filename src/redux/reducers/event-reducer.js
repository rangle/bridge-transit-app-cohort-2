import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
  events: null, 
};

export default (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    case ACTION_TYPES.PRESS_BUTTON:
      return action.payload

    default:
      return state;
  }
}