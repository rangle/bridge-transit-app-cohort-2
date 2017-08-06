import { ACTION_TYPES } from '../../constants/ActionTypes';
import { EVENTBRITE_API_KEY } from '../../constants/keys';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

const BASE_ENDPOINT = `https://www.eventbriteapi.com/v3/events/search/?token=${EVENTBRITE_API_KEY}&location.address=toronto&categories=`;
const reCategoryPath = /^.*\/category\/\d\d\d$/;

export const returnEventActionOnLocationChange = (action$) =>
  action$.ofType('@@router/LOCATION_CHANGE')
    .filter(action => reCategoryPath.test(action.payload.pathname))
    .map(action => ({
        type: ACTION_TYPES.GET_EVENTS,
        payload: action.payload.pathname.replace('/category/', '')
      }));

export const getEventEpic = (action$) =>
  action$.ofType(ACTION_TYPES.GET_EVENTS)
    .mergeMap(action =>
      Observable.ajax({
        url: `${BASE_ENDPOINT}${action.payload}`,
        crossDomain: true
      })
        .map(({ response }) => ({
          type: ACTION_TYPES.SET_EVENTS,
          payload: response,
        }))
    );
