import React from 'react';
import { Button } from './Button';
import { SimpleMap } from './SimpleMap';
import { Spinner } from './Spinner';

export const EventDetails = (props) => {
  return(
    props.eventError ?  <div>Sorry, there seems to be an error. Please try again later.</div>
    : props.eventFetching ? <div className="overlay"><Spinner/></div> 
      : <div className='event-details-card'>
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
          } </p>
        </div>
        <SimpleMap
          containerElement={
            <div className='map-container-element' />
          }
          mapElement={
            <div className='map-element' />
          }
        />
      </div>
  )
};

