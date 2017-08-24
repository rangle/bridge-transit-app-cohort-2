import { ACTION_TYPES } from '../../constants/ActionTypes';
import { Observable } from 'rxjs';

const google = window.google;
const DirectionsService = new google.maps.DirectionsService();

const requestDirectionsService = action => {
    return Observable.create(observer => {
        DirectionsService.route({
            origin: `${action.payload.origin.lat},${action.payload.origin.lng}`,
            destination: `${action.payload.destination.lat},${action.payload.destination.lng}`,
            travelMode: google.maps.TravelMode.TRANSIT,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                observer.next(result);
            } else {
                observer.error(result);
            }
        })
    }
)};

export const getDirectionsEpic = (action$, _, {ajax}) => 
    action$.ofType(ACTION_TYPES.GET_DIRECTIONS)
        .mergeMap(action => requestDirectionsService(action))
        .map(response => ({
            type: ACTION_TYPES.SET_DIRECTIONS,
            payload: response
        }));