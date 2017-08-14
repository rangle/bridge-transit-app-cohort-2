import React from 'react';

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

  return(
    <li className='event-card'>
      <a href={event.url}>
        <div className='event-container'>
          <div className="event-header">
            <div className='event-image'>
              {event.logo ? <img src={event.logo.url}/> : <img src='http://madihaevents.com/wp-content/uploads/2016/07/event.png'/>}
            </div>
            <span className='event-info--price'>{
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
      </a>
    </li>
  )
}
