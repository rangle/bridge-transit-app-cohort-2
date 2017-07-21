export const EVENT_ACTIONS = {
 HELLO: 'HELLO'
};

export const getEvent = event => ({
  type: EVENT_ACTIONS.HELLO,
  payload: event
});

export const pressButton = event => ({
  type: 'PRESS_BUTTON',
  payload: event
});


export const testAction = event => ({
  type: 'PRINT_TEST_ACTION',
  payload: event
});
