import React from 'react';

export const AddressListItem = ({address, ...props}) => (
    <li className="address-list-item" onClick={() => props.selectAddress(address)}>
        <i className="fa fa-home"></i>
        {address.formatted_address}
    </li>
);