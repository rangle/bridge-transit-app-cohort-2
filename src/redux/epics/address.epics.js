import { ACTION_TYPES } from '../../constants/ActionTypes';
import { PLACES_KEY } from '../../constants/keys';
import 'rxjs/add/operator/mergeMap';
import { doCORSRequest } from '../../utils/doCorsRequest';

//Coordinates of Toronto point
const TORONTO_COORDS = '43.655336,-79.402816';

//Search within this many meters of Toronto point
const RADIUS = '30000';

//PLACES ENDPOINT
const BASE_ENDPOINT = `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${TORONTO_COORDS}&radius=${RADIUS}&key=${PLACES_KEY}`;

//TODO: change fetch to Observable.ajax
export const getAddressEpic = (action$, _, {ajax}) =>
    action$.ofType(ACTION_TYPES.ADDRESS_INPUT_CHANGE)
        .debounceTime(400)
        .mergeMap(action => 
    /* use this for development */ doCORSRequest({method: 'GET', url: `${BASE_ENDPOINT}&query=${action.payload.replace(/\s/g, '+')}`})
    /* use this for production */ /* fetch(`${BASE_ENDPOINT}&query=${action.payload.replace(/\s/g, '+')}`) */
                            .then(res => JSON.parse(res), error => console.log(error)))
        .map(response => ({
                type: ACTION_TYPES.SET_ADDRESSES,
                payload: response.results})
        );