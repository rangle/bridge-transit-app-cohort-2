import React from 'react';
import { Button } from './Button';

export const EventDetails = (event) => {
  return(
    <div className='event-details-card'>
      <div className="event-details-container">
        <h3>{event.name.text}</h3>
        <img alt="Event" src={event.logo.url} />
      </div>
      <div className='event-details-container'>
        <p className='event-details--time'>{event.start.local} to {event.end.local}</p>
        <p className='event-details--description'>{event.description.text}</p>
        <p className='event-details--price'>{
          event.is_free ? <span>Free</span> :
            <Button
              className='button is-primary is-large'
              content='Buy Tickets'
              aria-label='Buy Tickets'
              handleClick= { () => window.location.assign(event.url)}
            />
        } </p>
      </div>
      {/* Add Google maps component */}
    </div>
  )
};
