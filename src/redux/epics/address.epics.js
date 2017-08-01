import { ACTION_TYPES } from '../../constants/ActionTypes';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';


//DIRECTIONS KEY
const GOOGLEMAPS_API_KEY = 'AIzaSyC4sITGIQEKBi1ejAZxazvwZlrk1pi7OeA';

//GOOGLE PLACES KEY
const PLACES_KEY = 'AIzaSyDOioGMJMKVJ-dc3SlXb8YYHzTNJEQ2SpM';

//PLACES ENDPOINT
const BASE_ENDPOINT = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=${PLACES_KEY}`;


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
        .mergeMap(action => doCORSRequest({method: 'GET', url: `${BASE_ENDPOINT}`})
                            .then(res => JSON.parse(res), error => console.log(error)))
        .map(response => ({
                type: ACTION_TYPES.SET_ADDRESS,
                payload: response.results})
        );