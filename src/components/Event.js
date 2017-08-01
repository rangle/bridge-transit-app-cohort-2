import React from 'react';

export const Event = event => {
  return(
    <li className='item-card'>
      <a href={event.url}>
        <div className='item-container'>
          <div className='item-info'>
            <p className='item-info--time'>{event.start.local}</p>
            <p className='item-info--location'>{event.start.timezone}</p>
            <h3 className='item-info--title'>{event.name.text}</h3>
            <span className='item-info--price'>{
              event.is_free ? <span>Free</span> : <span>Click event for pricing details</span>
            }</span>
          </div> 
        </div>
      </a>
    </li>
  )
}