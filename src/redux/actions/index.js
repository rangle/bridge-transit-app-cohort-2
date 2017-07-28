import { ACTION_TYPES } from '../../constants/ActionTypes';

export const inputChange = value => ({
  type: ACTION_TYPES.INPUT_CHANGE,
  payload: value
});

export const setSearchKeyword = value => ({
  type: ACTION_TYPES.SET_SEARCH_KEYWORD,
  payload: value
});

