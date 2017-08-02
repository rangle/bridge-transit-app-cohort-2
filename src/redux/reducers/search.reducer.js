import { ACTION_TYPES } from '../../constants/ActionTypes';

export const DEFAULT_STATE = '';

export const searchInput = (state = DEFAULT_STATE, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.INPUT_CHANGE:
      return payload;
    default:
      return state;
  }
}
