import { ACTION_TYPES } from '../../constants/ActionTypes';
import { searchInput, INITIAL_VALUES } from './search.reducer';

describe('Search reducer', () => {

    it('should return the initial state', () => {
        expect(searchInput(undefined, {})).toEqual(INITIAL_VALUES.searchInput)
    });

  it('should update the searchInput value', () => {
    expect(searchInput( 
        INITIAL_VALUES.searchInput, 
        {type: ACTION_TYPES.INPUT_CHANGE, payload: 'music'} 
    )).toEqual('music')
  })
});
