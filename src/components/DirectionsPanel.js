import React from 'react';
import { DirectionStep } from './DirectionStep';

export const DirectionsPanel = props => (
    <div className="directions-panel"> 
        <ol className="ordered-directions">
        { props.directions && props.directions.routes[0] ?
          props.directions.routes[0].legs[0].steps.map(step => <DirectionStep key={step.instructions} step={step}/>)
          : null }
        </ol>
    </div>
);