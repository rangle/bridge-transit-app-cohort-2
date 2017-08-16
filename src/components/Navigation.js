import React from 'react';
import { Address } from './Address';
import { IndexLink } from 'react-router';


export const Navigation = props => (
    <nav>
      <ul className="navbar-items">
        <li className="navbar-items--home"><IndexLink to='/'>TransitTO</IndexLink></li>
        <li className="navbar-items--address"><Address {...props} /></li>
      </ul>
    </nav>
);
