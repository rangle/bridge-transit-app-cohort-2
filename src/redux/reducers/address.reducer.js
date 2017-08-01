import { ACTION_TYPES } from '../../constants/ActionTypes';


const DEFAULT_STATE = {
    addresses: [],
    addressSearchInput: '',
    displayAddressWindow: false,
    selectedAddress: {
        "formatted_address": "",
        "geometry": {
            "location": {
            "lat": null,
            "lng": null
            },
            "viewport": {
            "northeast": {
                "lat": null,
                "lng": null
            },
            "southwest": {
                "lat": null,
                "lng": null
            }
            }
        },
        "icon": "",
        "id": "",
        "name": "",
        "place_id": "",
        "reference": "",
        "types": [
            ""
        ]
    },
    savedAddress: {
        "formatted_address": "",
        "geometry": {
            "location": {
            "lat": null,
            "lng": null
            },
            "viewport": {
            "northeast": {
                "lat": null,
                "lng": null
            },
            "southwest": {
                "lat": null,
                "lng": null
            }
            }
        },
        "icon": "",
        "id": "",
        "name": "",
        "place_id": "",
        "reference": "",
        "types": [
            ""
        ]
    }
}

export const addressReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch(type) {
        case ACTION_TYPES.SET_ADDRESS:
            return {...state, addresses: payload};
        case ACTION_TYPES.SELECT_ADDRESS:
            return {...state, selectedAddress: payload.addressObj, addresses: [], addressSearchInput: payload.addressString};
        case ACTION_TYPES.SAVE_ADDRESS:
            return {...state, savedAddress: payload.addressObj, displayAddressWindow: false};
        case ACTION_TYPES.ADDRESS_INPUT_CHANGE:
            return {...state, addressSearchInput: payload};
        case ACTION_TYPES.SHOW_ADDRESS_WINDOW:
            return {...state, displayAddressWindow: true, selectedAddress: payload.addressObj, addressSearchInput: payload.addressString};
        case ACTION_TYPES.HIDE_ADDRESS_WINDOW:
            return {...state, displayAddressWindow: false};
        default:
            return state;
    }
}
