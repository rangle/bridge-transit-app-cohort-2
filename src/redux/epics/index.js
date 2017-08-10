import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { getCategoryEpic } from './category.epics';
import { getEventsEpic, returnEventsActionOnLocationChange } from './event.epics';
import { getAddressEpic } from './address.epics'


export default combineEpics(
  getCategoryEpic,
  getEventsEpic,
  getAddressEpic,
  returnEventsActionOnLocationChange
)
