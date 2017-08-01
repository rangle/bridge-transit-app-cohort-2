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

export const getCategories = categories => ({
  type: ACTION_TYPES.GET_CATEGORIES,
  payload: categories
});

export const setCategories = categories => ({
  type: ACTION_TYPES.SET_CATEGORIES,
  payload: categories
});

export const getEvents = events => ({
  type: ACTION_TYPES.GET_EVENTS,
  payload: events
});

export const setEvents = events => ({
  type: ACTION_TYPES.SET_EVENTS,
  payload: events
});
export const getAddress = addresses => ({
  type: ACTION_TYPES.GET_ADDRESS,
  payload: addresses
});

export const setAddress = addresses => ({
  type: ACTION_TYPES.SET_ADDRESS,
  payload: addresses
});

export const selectAddress = address => ({
  type: ACTION_TYPES.SELECT_ADDRESS,
  payload: { addressObj: address, addressString: address.formatted_address }
});

export const addressInputChange = value => ({
  type: ACTION_TYPES.ADDRESS_INPUT_CHANGE,
  payload: value
});