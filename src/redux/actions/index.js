export const EVENT_ACTIONS = {
 HELLO: 'HELLO'
};

export const getEvent = event => ({
  type: EVENT_ACTIONS.HELLO,
  payload: event
});