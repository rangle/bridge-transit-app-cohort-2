import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleOnClick(evt) {
    const { handleClick } = this.props;
      handleClick()
  }
  
  render() {
    const { className, ariaLabel, content } = this.props;
    
    return (
      <button
        className={`btn btn-default ${className}`}
        aria-label={ ariaLabel ? ariaLabel : null }
        onClick={ this.handleOnClick }
      >
      { content ? content : null }
      </button>
    );
  }
}

export default Button;
