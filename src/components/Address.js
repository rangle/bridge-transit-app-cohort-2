import React from 'react';
import { AddressListItem } from './AddressListItem';

export const Address = props => (
    <div className="address-box">
        <h4>Location:</h4>
        <input type="text" 
               placeholder="enter your address"
               value={props.addressSearchInput} 
               onChange={ev => {
                   props.addressInputChange(ev.target.value); 
                   props.getAddress(props.addressSearchInput);
               }}
               onBlur={ev => {
                   props.addressInputChange(props.selectedAddress.formatted_address);
               }}
               onFocus={ev => props.addressInputChange('')}
        /> 
        <div className="address-results">
            { props.addresses.map(address => (
                <AddressListItem address={address} key={address.place_id} {...props} />
            ))}
        </div>
    </div>
);
