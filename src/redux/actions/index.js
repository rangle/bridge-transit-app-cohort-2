import { ACTION_TYPES } from '../../constants/ActionTypes';

export const inputChange = value => ({
  type: ACTION_TYPES.INPUT_CHANGE,
  payload: value
});

export const setSearchKeyword = value => ({
  type: ACTION_TYPES.SET_SEARCH_KEYWORD,
  payload: value
});

export const getCategories = categories => ({
  type: ACTION_TYPES.GET_CATEGORIES,
  payload: categories
});

export const setCategories = categories => ({
  type: ACTION_TYPES.SET_CATEGORIES,
  payload: categories
});

export const setEvent = event => ({
  type: ACTION_TYPES.SET_EVENT,
  payload: event
});

export const setEvents = events => ({
  type: ACTION_TYPES.SET_EVENTS,
  payload: events
});

export const setAddresses = addresses => ({
  type: ACTION_TYPES.SET_ADDRESSES,
  payload: addresses
});

export const selectAddress = address => ({
  type: ACTION_TYPES.SELECT_ADDRESS,
  payload: { addressObj: address, addressString: address.formatted_address }
});

export const saveAddress = address => ({
  type: ACTION_TYPES.SAVE_ADDRESS,
  payload: { addressObj: address, addressString: address.formatted_address }
});

export const addressInputChange = value => ({
  type: ACTION_TYPES.ADDRESS_INPUT_CHANGE,
  payload: value
});

export const showAddressWindow = address => ({
  type: ACTION_TYPES.SHOW_ADDRESS_WINDOW,
  payload: address
});

export const hideAddressWindow = () => ({
  type: ACTION_TYPES.HIDE_ADDRESS_WINDOW,
  payload: ''
});

export const getGeolocation = location => ({
  type: ACTION_TYPES.GET_GEOLOCATION,
  payload: location
});

export const getDirections = locations => ({
  type: ACTION_TYPES.GET_DIRECTIONS,
  payload: locations
});

export const hideDirectionsWindow = () => ({
  type: ACTION_TYPES.HIDE_DIRECTIONS_WINDOW,
  payload: ''
});