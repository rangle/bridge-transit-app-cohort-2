import { ACTION_TYPES } from '../../constants/ActionTypes';

export const getEvent = event => ({
  type: ACTION_TYPES.HELLO,
  payload: event
});

export const inputChange = value => ({
  type: ACTION_TYPES.INPUT_CHANGE,
  payload: value
});

export const setSearchKeyword = value => ({
  type: ACTION_TYPES.SET_SEARCH_KEYWORD,
  payload: value
});

export const testAction = event => ({
  type: ACTION_TYPES.PRINT_TEST_ACTION,
  payload: event
});
