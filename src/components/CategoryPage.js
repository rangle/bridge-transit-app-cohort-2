import React from 'react';

export const CategoryPage = (props) => (
  <div>
    {console.log('props.chosenCategory in CategoryPage component: ', props.chosenCategory)}
    <h2>{props.chosenCategory.name} Events near Toronto, Ontario</h2>
    <button onClick={ () => props.getEvents() }>
      Fetch Events
    </button>
    {props.events 
      ? props.events.map((event) => {
        return (
          <div className="event">
            <h3>Name: {event.name.text}</h3>
            <h4>Date: {event.start.utc}</h4>
            <div>Description: {event.description.text}</div>
            <a href={event.url}>Register now: {event.url}</a>
          </div>
        )
      })
      : null
    }
  </div>
); 
