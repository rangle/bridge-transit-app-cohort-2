import { ACTION_TYPES } from '../../constants/ActionTypes';
import { Observable } from 'rxjs';

const getPositionObservable = (geolocationOptions) => {
  return Observable.create(observer => {
    navigator.geolocation.getCurrentPosition(
      function successHandler (location) {
        observer.next(location);
      },
      function errorHandler (err) {
        observer.error(err);
      },
      geolocationOptions);
  });
};

export const geolocationEpic = (action$) =>
  action$.ofType(ACTION_TYPES.GET_GEOLOCATION)
    .mergeMap(() =>
      getPositionObservable({
        enableHighAccuracy: true,
        timeout: 5000,
      }).map(result => ({
        type: ACTION_TYPES.SET_GEOLOCATION,
        payload: {
          lat: result.coords.latitude,
          lng: result.coords.longitude,
        }
      })).catch(error => Observable.of({
        type: ACTION_TYPES.GET_GEOLOCATION_INVALIDATE,
        payload: error
      }))
    );

