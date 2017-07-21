import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';



export const testEpic = action$ => 
  action$.ofType('PRESS_BUTTON')
    .mergeMap(action =>
      Observable.ajax(`https://api.edamam.com/search?app_id=87a620cd&q=apple&app_key=904607d528b6ba987913592efc02e3d5`)
      .map(({response}) => ({
        type: 'PRINT_TEST_ACTION',
        payload: response.hits
      }))
    ); //delete this epic


export default combineEpics(
  testEpic
)