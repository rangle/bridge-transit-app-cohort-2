import React from 'react';
import { EventsList } from './EventsList';
import { Spinner } from './Spinner';

export const EventsByCategoryPage = (props) => {
  return (
    props.eventsFetching ? <div className="overlay"><Spinner/></div> :
    <div className="events-by-category-page">
      {props.allCategories.map(category => category.id === props.params.categoryID
        ? <h2>{category.name} Events near Toronto, Ontario</h2>
        : null)
      }
      {props.events
        ? <EventsList events={props.events} />
        : props.eventsError ? 'Sorry, there seems to be an error. Please try again later.' : null
      }
    </div>
  )
};
