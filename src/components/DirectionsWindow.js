import React from 'react';
import { DirectionsMap } from './DirectionsMap';
import { DirectionsPanel } from './DirectionsPanel';
import { DirectionsLocation } from './DirectionsLocation';
import { Spinner } from './Spinner';

export const DirectionsWindow = props => {
    if (props.directionsFetching){
      return (<div className="overlay"><Spinner/></div>);
    } else { 
        return (
            <div className="directions-window">
                <div className="directions-modal">
                    <button className="close-button" onClick={() => props.hideDirectionsWindow()}>
                        <span>&#10005;</span>
                    </button>
                    <h1>Transit Directions</h1>
                    <div className="directions-scrollable">
                    <div className="directions-addresses">
                        <DirectionsLocation label="From:"
                                            content={props.savedAddress.formatted_address}
                                            ifNull="Set your address"
                        />
                        <DirectionsLocation label="To:"
                                            content={props.event.venue.address.localized_address_display}
                                            ifNull="Couldn't find an event address, sorry. "
                        />
                    </div>

                    <div className="directions-container">
                        <div className="directions-map">
                        { 
                            props.directions ?
                            <DirectionsMap
                                containerElement={
                                    <div className='directions-map-container-element' />
                                } 
                                mapElement={
                                    <div className='directions-map-element' />
                                }
                                directions={
                                    props.directions
                                }
                            />
                            : null 
                        }
                        </div>
                        <DirectionsPanel {...props} />
                    </div>
                    </div>
                </div>
            </div> 
    )}
};