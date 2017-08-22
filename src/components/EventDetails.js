import React from 'react';
import { Button } from './Button';
import { SimpleMap } from './SimpleMap';
import { Spinner } from './Spinner';

export const EventDetails = (props) => {
  if (props.eventError) {
    return <div>Sorry, there seems to be an error. Please try again later.</div>;
  } else if (props.eventFetching) {
    return (
      <div className="overlay">
        <Spinner/>
      </div>);
  } else {
    const eventDateInstance = new Date(props.event.start.local)
    const eventDateDay = eventDateInstance.toLocaleString('en-us', { day: "numeric" });
    const eventDateWeekday = eventDateInstance.toLocaleString('en-us', { weekday: "short" });
    const eventDateYear = eventDateInstance.toLocaleString('en-us', { year: "numeric" });
    const eventDateMonth = eventDateInstance.toLocaleString('en-us', { month: "short" });
    const eventDateHour = eventDateInstance.toLocaleString('en-us', { hour: "numeric", hour12: false });
    let eventDateMinute = eventDateInstance.toLocaleString('en-us', { minute: "numeric" });
    eventDateMinute = eventDateMinute === '0'
      ? eventDateMinute = `${eventDateMinute}0`
      : eventDateMinute;

    const eventEndDateInstance = new Date(props.event.end.local);
    const eventEndDateHour = eventEndDateInstance.toLocaleString('en-us', { hour: "numeric", hour12: false });
    let eventEndDateMinute = eventEndDateInstance.toLocaleString('en-us', { minute: "numeric" });
    eventEndDateMinute = eventEndDateMinute === '0'
      ? eventEndDateMinute = `${eventEndDateMinute}0`
      : eventEndDateMinute;

    return (
      <div className='event-details-page'>
      <div className='event-details-card'>
        <div className='event-details-container-image'>
          {
            props.event.logo.url 
            ? <img className='event-details--image' alt="Event" src={props.event.logo.url} />
            : null
          }
        </div>
          <div className='event-details-container-main'>
            <h3 className='event-details--title'>{props.event.name.text}</h3>
            <p className='event-details--date'>{eventDateWeekday}, {eventDateMonth} {eventDateDay}, {eventDateYear}</p>
            <p className='event-details--time'>{eventDateHour}:{eventDateMinute} to {eventEndDateHour}:{eventEndDateMinute}</p>
            <p className='event-details--price'>
              {
                props.event.is_free 
                ? <span>Free</span> 
                : <Button
                    className='button is-primary is-large'
                    content='Buy Tickets'
                    aria-label='Buy Tickets'
                    handleClick= { () => window.location.assign(props.event.url) }
                  />
              } 
            </p>
          </div>
          <div className='event-details-container-description'>
            <h4 className='event-details--description-title'>Description</h4>
            <p className='event-details--description-details'>{props.event.description.text}</p>
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
      </div>
    );
  }
};