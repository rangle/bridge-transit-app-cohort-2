import React from 'react';
import { Category } from './Category';

export const CategoriesList = (props) => {
  return (
    <div className="Categories-list">
      { props.categories.map(category => <Category name={category.name} image={category.image}/>) }
    </div>
  )
};