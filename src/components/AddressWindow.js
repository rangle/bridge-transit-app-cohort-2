import React from 'react';
import { AddressListItem } from './AddressListItem';

export const AddressWindow = props => (
    <div className="address-window">
        <div className="address-modal" >
            <button className="close-button" onClick={()=>props.hideAddressWindow(false)}>
                <span>&#10005;</span>
            </button>
            <h2>Set your location</h2>
            <div className="adress-container">
                <input className="search-input" type="text" 
                placeholder="enter your address"
                value={props.addressSearchInput} 
                onChange={ev => props.addressInputChange(ev.target.value)}
                /> 
            </div>
            <ul className="address-results">
                { props.addresses.map(address => (
                    <AddressListItem address={address} key={address.place_id} {...props} />
                ))}
            </ul>
            { (props.addressSearchInput && props.addresses.length === 0 && props.addressSearchInput.length > 1 )
            ? <button className="is-primary" onClick={()=>props.saveAddress(props.selectedAddress)}>Save Location</button>
            : null}
        </div>
    </div>
);