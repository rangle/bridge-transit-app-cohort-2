// https://cors-anywhere.herokuapp.com/ CORS Everywhere 
const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

export const doCORSRequest = (options) => {
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
