import { ACTION_TYPES } from '../../constants/ActionTypes';
import { searchInput, DEFAULT_STATE } from '../../redux/reducers/search.reducer';

describe('Search reducer', () => {

    it('should return the initial state', () => {
        expect(searchInput(undefined, {})).toEqual(DEFAULT_STATE)
    });

  it('should update the searchInput value', () => {
    expect(searchInput( 
        DEFAULT_STATE, 
        {type: ACTION_TYPES.INPUT_CHANGE, payload: 'music'} 
    )).toEqual('music')
  })
});
