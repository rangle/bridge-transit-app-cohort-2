import { ACTION_TYPES } from '../../constants/ActionTypes';
import { EVENTBRITE_API_KEY } from '../../constants/keys';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

const BASE_ENDPOINT = `https://www.eventbriteapi.com/v3/events/`;
const API_KEY_PATH = `?token=${EVENTBRITE_API_KEY}`;

// SECTION: Events by category
const CATEGORY_QUERY_PATH = '&location.address=toronto&categories=';
const CATEGORY_METHOD_PATH = 'search/';
const reCategoryPath = /^\/category\/\d\d\d$/;
export const returnEventsActionOnLocationChange = (action$) =>
  action$.ofType('@@router/LOCATION_CHANGE')
    .filter(action => reCategoryPath.test(action.payload.pathname))
    .map(action => ({
        type: ACTION_TYPES.GET_EVENTS,
        payload: action.payload.pathname.replace('/category/', '')
      }));

export const getEventsEpic = (action$) =>
  action$.ofType(ACTION_TYPES.GET_EVENTS)
    .mergeMap(action =>
      Observable.ajax({
        url: `${BASE_ENDPOINT}${CATEGORY_METHOD_PATH}${API_KEY_PATH}${CATEGORY_QUERY_PATH}${action.payload}`,
        crossDomain: true
      })
      .map(({ response }) => ({
        type: ACTION_TYPES.SET_EVENTS,
        payload: response,
      }))
      .catch(error => Observable.of({
        type: ACTION_TYPES.SET_EVENTS_INVALIDATE,
        payload: error
      })) 
    );

// SECTION: Single event
const reEventPath = /^\/event\/(\d)+$/;
export const returnEventActionOnLocationChange = (action$) =>
  action$.ofType('@@router/LOCATION_CHANGE')
    .filter(action => reEventPath.test(action.payload.pathname))
    .map(action => ({
        type: ACTION_TYPES.GET_EVENT,
        payload: action.payload.pathname.replace('/event/', '')
      }));

export const getEventEpic = (action$) =>
  action$.ofType(ACTION_TYPES.GET_EVENT)
    .mergeMap(action =>
      Observable.ajax({
        url: `${BASE_ENDPOINT}${action.payload}/${API_KEY_PATH}`,
        crossDomain: true
      })
        .map(({ response }) => ({
          type: ACTION_TYPES.SET_EVENT,
          payload: response,
        }))
        .catch(error => Observable.of({
          type: ACTION_TYPES.SET_EVENT_INVALIDATE,
          payload: error
      })) 
    );