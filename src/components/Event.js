import React from 'react';

export const Event = event => {
  return(
    <li className='item-card'>
      <a href={event.href}>
        <div className='item-container'>
          <img src={event.img} alt=""/>
          <div className='item-info'>
            <p className='item-info--time'>{event.time}</p>
            <p className='item-info--location'>{event.location}</p>
            <h3 className='item-info--title'>{event.title}</h3>
            <span className='item-info--price'>{event.price}</span>
          </div> 
        </div>
      </a>
    </li>
  )
}