import React from 'react';
import { Button } from './Button';

export const EventDetails = (props) => {
  return (
    <div className='event-details-card'>
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
      {/* Add Google maps component */}
    </div>
  )
};

