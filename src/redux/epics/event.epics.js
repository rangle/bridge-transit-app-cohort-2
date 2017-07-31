import { ACTION_TYPES } from '../../constants/ActionTypes';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

const EVENTBRITE_API_KEY = 'QWZWM6CDIXJRAOHDGJ7Y';

const BASE_ENDPOINT = `https://www.eventbriteapi.com/v3/events/search/?token=${EVENTBRITE_API_KEY}&location.address=toronto&categories=`;

export const getEventEpic = (action$, store) =>
  action$.ofType(ACTION_TYPES.GET_EVENTS)
    .mergeMap(action =>
      Observable.ajax({
        url: `${BASE_ENDPOINT}${store.getState().category.chosenCategory.id}`,
        crossDomain: true
      })
        .map(({ response }) => ({
          type: ACTION_TYPES.SET_EVENTS,
          payload: response,
        }))
    );