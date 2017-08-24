import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const DEFAULT_COORDS = { lat: 43.653, lng: -79.383 };

export const SimpleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.coordinates ? props.coordinates : DEFAULT_COORDS }
  >
    {
      (props.coordinates) ?
        <Marker position={props.coordinates}
                label={props.venueName ? props.venueName : ""} />
        : null
    }
  </GoogleMap>
));
