import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SearchInput } from '../../components/SearchInput';

describe('SearchInput component tests', () => {
  const inputChange = jest.fn();
  const setSearchKeyword = jest.fn();
  const label = "Search-Events";
  const searchTerm = 'Music';
  const wrapper = shallow(<SearchInput label={label} inputChange={inputChange} setSearchKeyword={setSearchKeyword} />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInput label="Search-Events" />, div);
  });

  it('completes the onChange event successfully', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: searchTerm
      }
    });
    expect(inputChange).toBeCalledWith(searchTerm);
  });

  it('completes the onKeyPress event successfully', () => {
    wrapper.find('input').simulate('keyPress', {
      key: 'Enter',
      target: {
        value: searchTerm
      }
    });
    expect(setSearchKeyword).toBeCalledWith(searchTerm);
  });

});