import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
  event: null,
  isFetching: false,
  didInvalidate: false,
  isPreview: true,
};

export const eventReducer = (state = DEFAULT_STATE, action) => {

  switch(action.type) {
    case ACTION_TYPES.GET_EVENT:
      return {...state, isFetching: true};
    case ACTION_TYPES.SET_EVENT:
      let event = action.payload;
      if (action.payload.venue.address.latitude && action.payload.venue.address.longitude) {
        let venue_location = {
          lat: parseFloat(action.payload.venue.address.latitude),
          lng: parseFloat(action.payload.venue.address.longitude)
        };
        event = {...event, venue_location};
      }
      return {...state, event: event, isFetching: false, didInvalidate: false};
    case ACTION_TYPES.SET_EVENT_INVALIDATE:
      return {...state, isFetching: false, didInvalidate: true, event: null}
    case ACTION_TYPES.UPDATE_EVENT_DETAIL_RENDER:
      return {...state, isPreview: false}
    default:
      return state;
  }
};
