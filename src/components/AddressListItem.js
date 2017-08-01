import React from 'react';

export const AddressListItem = ({address, ...props}) => (
    <div className="address-list-item" onClick={() => props.selectAddress(address)}>
        {address.formatted_address}
    </div>
);