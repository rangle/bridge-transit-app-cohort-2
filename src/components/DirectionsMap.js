import React from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

export const DirectionsMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));