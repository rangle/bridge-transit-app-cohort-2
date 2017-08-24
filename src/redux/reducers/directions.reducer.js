import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
    directions: null,
    displayDirectionsWindow: false,
    isFetching: false
};

export const directionsReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch(type) {
        case(ACTION_TYPES.GET_DIRECTIONS):
            return {...state, isFetching: true, displayDirectionsWindow: true}
        case(ACTION_TYPES.SET_DIRECTIONS):
            return {...state, isFetching: false, directions: payload};
        case(ACTION_TYPES.HIDE_DIRECTIONS_WINDOW):
            return {...state, displayDirectionsWindow: false};
        default:
            return state;
    }
};