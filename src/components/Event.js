import React from 'react';

export const Event = event => {
  return(
    <li className='event-card'>
      <a href={event.url}>
        <div className='event-container'>
          <div className='event-image'>
            {event.logo ? <img src={event.logo.url}/> : null}
          </div>
          <div className='event-info'>
            <p className='event-info--time'>{event.start.local}</p>
            <h3 className='event-info--title'>{event.name.text}</h3>
            <p className='event-info--location'>{event.start.timezone}</p>
            <span className='event-info--price'>{
              event.is_free ? <span>Free</span> : <span>Click event for pricing details</span>
            }</span>
          </div>
        </div>
      </a>
    </li>
  )
}
