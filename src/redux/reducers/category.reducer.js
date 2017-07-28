import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  categories: [],
  searchKeyword: '',
};

export const categoryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        categories: action.payload.categories
      })
    case ACTION_TYPES.SET_SEARCH_KEYWORD:
      return Object.assign({}, state, {
        searchKeyword: action.payload
      })
      default:
        return state;
    }
}
