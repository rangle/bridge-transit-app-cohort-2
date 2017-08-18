import React from 'react';
import { Link } from 'react-router';

export const Event = event => {
  const eventDateInstance = new Date(event.start.local)
  const eventDateDay = eventDateInstance.toLocaleString('en-us', { day: "numeric" })
  const eventDateWeekday = eventDateInstance.toLocaleString('en-us', { weekday: "short" })
  const eventDateMonth = eventDateInstance.toLocaleString('en-us', { month: "short" })
  const eventDateHour = eventDateInstance.toLocaleString('en-us', { hour: "numeric", hour12: false })
  let eventDateMinute = eventDateInstance.toLocaleString('en-us', { minute: "numeric" })
  eventDateMinute = eventDateMinute === '0'
    ? eventDateMinute = `${eventDateMinute}0`
    : eventDateMinute
  const eventID = event.id;
  const eventLink = `/event/${eventID}`;

  return(
    <li className='event-card'>
      <Link to={eventLink}>
        <div className='event-container'>
          <div className="event-header">
            <div className='event-header--image'>
              {event.logo ? <img src={event.logo.url} alt="event-logo"/> : <img src='http://madihaevents.com/wp-content/uploads/2016/07/event.png' style={{ height: '150px' }} alt="event-logo"/>}
            </div>
            <span className='event-header--price'>{
              event.is_free ? <span>Free</span> : <span>Click event for pricing details</span>
            }</span>
          </div>
          <div className='event-info'>
            <p className='event-info--time'>{`${eventDateWeekday}, ${eventDateDay} ${eventDateMonth} ${eventDateHour}:${eventDateMinute}`}</p>
            <h3 className='event-info--title'>{event.name.text}</h3>
            <p className='event-info--location'>{event.start.timezone}</p>
            <div className="event-info--tag">
              <span>
                #Event
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
