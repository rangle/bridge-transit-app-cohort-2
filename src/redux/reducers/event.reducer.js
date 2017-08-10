import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
  events: null,
  isFetching: false,
  didInvalidate: false,
};

export const eventsReducer = (state = DEFAULT_STATE, action) => {

  switch(action.type) {
    case ACTION_TYPES.GET_EVENTS:
      return {...state, isFetching: true};
    case ACTION_TYPES.SET_EVENTS:
      return {...state, events: action.payload.events, isFetching: false, didInvalidate: false}
    case ACTION_TYPES.SET_EVENT_INVALIDATE:
      return {...state, isFetching: false, didInvalidate: true, events: null}
    default:
      return state;
  }
}