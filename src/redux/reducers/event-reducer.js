import { EVENT_ACTIONS } from '../actions';

const DEFAULT_STATE = {
  events: null
};

export default (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    case EVENT_ACTIONS.HELLO:
      return 'hello'

    default:
      return state;
  }
}