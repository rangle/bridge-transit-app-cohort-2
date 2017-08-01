import React from 'react';
import { AddressListItem } from './AddressListItem';

export const AddressWindow = props => (
    <div className="address-window">
        <button className="close-button" onClick={()=>props.hideAddressWindow(false)}>x</button>
        <h2>Change Location</h2>
        <input type="text" 
               placeholder="enter your address"
               value={props.addressSearchInput} 
               onChange={ev => {
                   props.addressInputChange(ev.target.value); 
                   props.getAddress(props.addressSearchInput);
               }}
        /> 
        <div className="address-results">
            { props.addresses.map(address => (
                <AddressListItem address={address} key={address.place_id} {...props} />
            ))}
        </div>
        <button onClick={()=>props.saveAddress(props.selectedAddress)}>Save Location</button>
    </div>
);