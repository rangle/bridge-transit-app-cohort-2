import React, { Component } from 'react';
import { EventsList } from './EventsList';

export class CategoryPage extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        {
          this.props.allCategories.map(category => category.id === this.props.params.categoryID 
          ? <h2>{category.name} Events near Toronto, Ontario</h2> 
          : null)
        }
        <button className="fetch-events" onClick={ () => this.props.getEvents() }>
          Fetch Events
        </button>
        {this.props.events 
          ? <EventsList events={this.props.events} />
          : null
        }
      </div>
    );
  }
}