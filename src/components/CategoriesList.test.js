import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CategoriesList } from './CategoriesList';
import { Category } from './Category';

it('renders without crashing', () => {
  const props = {
    categories: [{}, {}, {}]
  };

  const div = document.createElement('div');
  ReactDOM.render(<CategoriesList {...props} />, div);
});

it('renders correct number of child nodes', () => {
  const props = {
    categories: [{}, {}, {}]
  };

  const wrapper = shallow(<CategoriesList {...props} />);

  expect(wrapper.find(Category)).toHaveLength(3);
});