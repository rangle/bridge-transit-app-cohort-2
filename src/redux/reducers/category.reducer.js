import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  categories: [],
  searchKeyword: '',
  chosenCategory: null,
};

export const categoryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ACTION_TYPES.SET_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        categories: action.payload.categories,
        chosenCategory: action.payload.categories[0],
      });
    case ACTION_TYPES.SET_SEARCH_KEYWORD:
      return Object.assign({}, state, {
        searchKeyword: action.payload,
      });
      default:
        return state;
    }
}
