import React from 'react';
import { withGoogleMap, GoogleMap, /*Marker*/ } from "react-google-maps";

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyC4sITGIQEKBi1ejAZxazvwZlrk1pi7OeA";

export const MyMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));