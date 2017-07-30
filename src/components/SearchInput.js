import React from 'react';
export const SearchInput = ({label, searchInput, inputChange}) => { return (
    
    // The search input container contains a span element for the label
    // and a search input element.
    // The container is given a generic search-input className as well as 
    // a instance specific className (corresponding to the label)
    // for the purpose of flexible styling later on (apply generic styles
    // to all search inputs across app as well as specific styling for 
    // specific input instances)

    <div className={`${label.replace(/\s/g,'-')} search-input`}>
       <input className="search-input" type="search" value={searchInput} placeholder={label} onChange={ev => inputChange(ev.target.value)} /> 
    </div>
)};