import React from 'react';
import { Address } from './Address';


export const Navigation = props => (
    <nav>
      <ul className="navbar-items">
        <li className="navbar-items--home"><a href='/'>TransitTO</a></li>
        <li className="navbar-items--address"><Address {...props} /></li>
      </ul>
    </nav>
);
