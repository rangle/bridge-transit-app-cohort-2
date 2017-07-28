import { ACTION_TYPES } from '../../constants/ActionTypes';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

const EVENTBRITE_API_KEY = 'QWZWM6CDIXJRAOHDGJ7Y';

const BASE_ENDPOINT = `https://www.eventbriteapi.com/v3/categories/?token=${EVENTBRITE_API_KEY}`;

export const getCategoryEpic = action$ =>
  action$.ofType(ACTION_TYPES.GET_CATEGORIES)
    .mergeMap(action =>
      Observable.ajax({url: BASE_ENDPOINT, crossDomain: true})
        .map(({ response }) => ({
          type: ACTION_TYPES.SET_CATEGORIES,
          payload: response,
        }))
    );
