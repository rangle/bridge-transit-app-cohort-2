import * as Actions from '../../redux/actions';
import { ACTION_TYPES } from '../../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to change input', () => {
    const text = 'hello';
    const expectedAction = {
      type: ACTION_TYPES.INPUT_CHANGE,
      payload: 'hello'
    };
    expect(Actions.inputChange(text)).toEqual(expectedAction);
  })

  it('should create an action to set search keyword', () => {
    const text = 'music';
    const expectedAction = {
      type: ACTION_TYPES.SET_SEARCH_KEYWORD,
      payload: 'music'
    };
    expect(Actions.setSearchKeyword(text)).toEqual(expectedAction);
  })

})


