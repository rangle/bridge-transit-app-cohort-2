import React from 'react';

export const AddressListItem = ({address, ...props}) => (
    <div onClick={() => props.selectAddress(address)}>
        {address.formatted_address}
    </div>
);