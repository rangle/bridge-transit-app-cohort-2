import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

export const MyMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 43.653, lng: -79.383 }}
  />
));