import React from 'react';
export const Address = props => (
    <div>
        <div>
            <h2>Current address:</h2>
            {props.selectedAddress.formatted_address}
        </div>

        <h4>Change location:</h4>
        <input type="text" />
        <button onClick={() => props.getAddress()}>search</button>
        <div>
            <h5>Matching places:</h5>
            { props.addresses.map(address => (
                <div>
                    <li>Address: {address.formatted_address}</li>
                    <li>Lat: {address.geometry.location.lat} Lng: {address.geometry.location.lng}</li>
                    <button onClick={() => props.selectAddress(address)}>click to confirm this address</button>
                </div>
            ))}
        </div>
    </div>
);
