export const EVENT_ACTIONS = {
 GET_EVENT: 'GET_EVENT'
};

export const getEvent = event => ({
  type: EVENT_ACTIONS.GET_EVENT,
  payload: event
});