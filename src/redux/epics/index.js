import { combineEpics } from 'redux-observable';

import { getEventEpic } from './event-epics';

export default combineEpics(
  getEventEpic,
)