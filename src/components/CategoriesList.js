import React from 'react';

import { Category } from './Category';

export const CategoriesList = (props) => {
  const categories = props.selectedCategories 
    ? props.selectedCategories 
    : props.allCategories & props.allCategories > 0 
      ? props.allCategories 
      : null; 
 
  return (
    <div className="Categories-list"> 
      {
        categories
          ? categories.map(category => <Category key={category.name} name={category.name} id={category.id} />)
          : null 
      }
    </div>
  );
};