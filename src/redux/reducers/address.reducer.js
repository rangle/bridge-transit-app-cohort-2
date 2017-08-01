import { ACTION_TYPES } from '../../constants/ActionTypes';


const DEFAULT_STATE = {
    address: [],
    selectedAddress: {
        formatted_address: "Toronto",
        geometry: {
            location: {
            lat: 123,
            lng: 345
            }
        }}
}

export const addressReducer = (state = DEFAULT_STATE.address, {type, payload}) => {
    switch(type) {
        case ACTION_TYPES.SET_ADDRESS:
            return payload;
        default:
            return state;
    }
}

export const selectedAddressReducer = (state = DEFAULT_STATE.selectedAddress, {type, payload}) => {
    switch(type) {
        case ACTION_TYPES.SELECT_ADDRESS:
            return payload;
        default:
            return state;
    }
}