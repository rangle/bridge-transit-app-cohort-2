import { ACTION_TYPES } from '../../constants/ActionTypes';
import { EVENTBRITE_API_KEY } from '../../constants/keys';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

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
