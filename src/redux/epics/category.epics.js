import { ACTION_TYPES } from '../../constants/ActionTypes';
import { EVENTBRITE_API_KEY } from '../../constants/keys';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

const BASE_ENDPOINT = `https://www.eventbriteapi.com/v3/categories/?token=${EVENTBRITE_API_KEY}`;

export const getCategoryEpic = (action$, _, {ajax}) =>
  action$.ofType(ACTION_TYPES.GET_CATEGORIES)
    .mergeMap(action =>
      ajax({url: BASE_ENDPOINT, crossDomain: true})
        .map(({ response }) => ({
          type: ACTION_TYPES.SET_CATEGORIES,
          payload: response,
        }))
        .catch(error => Observable.of({
          type: ACTION_TYPES.SET_CATEGORY_INVALIDATE,
          payload: error
        })) 
    );
