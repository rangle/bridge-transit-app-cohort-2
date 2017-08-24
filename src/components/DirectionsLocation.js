import React from 'react';

export const DirectionsLocation = ({label, content, ifNull}) => (
    <div className="directions-location-container">
        <div className="directions-location-label">
            { label }
        </div>
        <div className="directions-location">
            { content || ifNull }
        </div>
    </div>
);