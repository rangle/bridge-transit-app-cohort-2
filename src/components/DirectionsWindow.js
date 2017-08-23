import React from 'react';
import { SimpleMap } from './SimpleMap'; 
import { DirectionsMap } from './DirectionsMap';

export const DirectionsWindow = props => (
    <div className="directions-window">
        <div className="directions-modal">
            <button className="close-button" onClick={()=>console.log("close window action")}>
                <span>&#10005;</span>
            </button>
            <h2>Transit Directions</h2>
            <div className="directions-addresses">
                <div>
                   From: {props.savedAddress.formatted_address ? props.savedAddress.formatted_address : 'set your address'}
                </div>
                <div>
                   To: {props.event.venue.address.localized_address_display}
                </div>
            </div>
           <div className="directions-container">
               <div className="directions-map">
                    <DirectionsMap
                        containerElement={
                            <div className='directions-map-container-element' />
                        } 
                        mapElement={
                            <div className='directions-map-element' />
                        }
                    />
               </div>
                <div className="directions-panel">
                    <h3>Instructions here:</h3>
                </div>
           </div>
        </div>
    </div> 
);