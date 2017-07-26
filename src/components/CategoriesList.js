import React from 'react';

import { Category } from './Category';

export const CategoriesList = (props) => {
  const categories = props.selectedCategories ? props.selectedCategories : props.allCategories; 
 
  return (
    <div className="Categories-list"> 
      {
        categories.map(category => <Category name={category.name} image={category.image}/>) 
      }
    </div>
  )
};