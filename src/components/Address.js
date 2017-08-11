import React from 'react';

export const Address = props => (
    <div 
        className="address-trigger" 
        onClick={ () => props.showAddressWindow({
            addressObj: props.savedAddress, 
            addressString: props.savedAddress.formatted_address
        })}
    >
        {
            props.savedAddress.formatted_address.length ?
            <span><b>Current location:</b> {props.savedAddress.formatted_address}</span>
            : <b>Set your location</b>
        }
    </div>
);
