import React, { Component } from 'react';
import { EventsList } from './EventsList';

export class CategoryPage extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div className="category-page">
        {this.props.allCategories.map(category => category.id === this.props.params.categoryID 
          ? <h2>{category.name} Events near Toronto, Ontario</h2> 
          : null)
        }
        {this.props.events 
          ? <EventsList events={this.props.events} />
          : null
        }
      </div>
    );
  }
}