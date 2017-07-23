import { ACTION_TYPES } from '../../constants/ActionTypes';

const INITIAL_VALUES = {
  searchInput: '',
};

export const searchInput = (state = INITIAL_VALUES.searchInput, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.INPUT_CHANGE:
      return payload;
    default:
      return state;
  }
}
