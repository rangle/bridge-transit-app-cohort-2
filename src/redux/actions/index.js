import { ACTION_TYPES } from '../../constants/ActionTypes';

export const EVENT_ACTIONS = {
 HELLO: 'HELLO'
};

export const getEvent = event => ({
  type: EVENT_ACTIONS.HELLO,
  payload: event
});


export const inputChange = value => ({
  type: ACTION_TYPES.INPUT_CHANGE,
  payload: value
});