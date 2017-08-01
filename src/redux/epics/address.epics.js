import { ACTION_TYPES } from '../../constants/ActionTypes';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';


//DIRECTIONS KEY
const GOOGLEMAPS_API_KEY = 'AIzaSyC4sITGIQEKBi1ejAZxazvwZlrk1pi7OeA';

//GOOGLE PLACES KEY
const PLACES_KEY = 'AIzaSyDOioGMJMKVJ-dc3SlXb8YYHzTNJEQ2SpM';

//Coordinates of Toronto point
const TORONTO_COORDS = '43.655336,-79.402816';

//Search within this many meters of Toronto point
const RADIUS = '30000';

//PLACES ENDPOINT
const BASE_ENDPOINT = `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${TORONTO_COORDS}&radius=${RADIUS}&key=${PLACES_KEY}`;

// https://cors-anywhere.herokuapp.com/ CORS Everywhere 
const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

const doCORSRequest = (options) => {
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();
        x.open(options.method, cors_api_url + options.url);
        x.onload = () => {
            if (x.status >= 200 && x.status < 300) {
                resolve(x.responseText);
            } else {
                reject(x.statusText);
            }
        };
        if (/^POST/i.test(options.method)) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        x.send(options.data);
})};

export const getAddressEpic = action$ =>
    action$.ofType(ACTION_TYPES.GET_ADDRESS)
        .debounceTime(500)
        .mergeMap(action => doCORSRequest({method: 'GET', url: `${BASE_ENDPOINT}&query=${action.payload.replace(/\s/g, '+')}`})
                            .then(res => JSON.parse(res), error => console.log(error)))
        .map(response => ({
                type: ACTION_TYPES.SET_ADDRESS,
                payload: response.results})
        );