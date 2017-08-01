import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { getCategoryEpic } from './category.epics';
import { getEventEpic } from './event.epics';


export default combineEpics(
  getCategoryEpic,
  getEventEpic,
)
