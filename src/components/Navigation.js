import React from 'react';
import { Address } from './Address';


export const Navigation = props => (
    <nav>
        <a href='/'>home</a>
         <Address {...props} />
    </nav>
);
