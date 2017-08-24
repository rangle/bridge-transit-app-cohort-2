import React from 'react';
import { Button } from './Button';
import { SimpleMap } from './SimpleMap';
import { Spinner } from './Spinner';
import { DirectionsWindow } from './DirectionsWindow';

export const EventDetails = (props) => {
    if (props.eventError){
      return <div>Sorry, there seems to be an error. Please try again later.</div>;
    } else if (props.eventFetching){
      return <div className="overlay"><Spinner/></div>;
    } else {
      return (<div className='event-details-card'>
        {
          props.displayDirectionsWindow ?
          <DirectionsWindow {...props} />
          : null 
        }
          <div className="event-details-container">
            <h3>{props.event.name.text}</h3>
            {
              props.event.logo.url ? 
              <img alt="Event" src={props.event.logo.url} />
              : null
            }
          </div>
          <div className='event-details-container'>
            <p className='event-details--time'>{props.event.start.local} to {props.event.end.local}</p>
            <p className='event-details--description'>{props.event.description.text}</p>
            <p className='event-details--price'>{
              props.event.is_free ? <span>Free</span> :
                <Button
                  className='button is-primary is-large'
                  content='Buy Tickets'
                  aria-label='Buy Tickets'
                  handleClick= { () => window.location.assign(props.event.url)}
                />
            } 
                <button className="btn btn-default button is-primary is-large" 
                        onClick={() => props.getDirections({
                          origin: {
                            //TODO: replace this with "current address:"
                                    lat: props.savedAddress.geometry.location.lat || '43.65711530000001',
                                    lng: props.savedAddress.geometry.location.lng || '-79.4002088'
                                  },
                          destination: {
                                    lat: props.event.venue.latitude,
                                    lng: props.event.venue.longitude
                          }
                })}>
                  Get Directions
                </button>
            </p>
          </div>
          <SimpleMap
            containerElement={
              <div className='map-container-element' />
            }
            mapElement={
              <div className='map-element' />
            }
          />
        </div>);
    }
};