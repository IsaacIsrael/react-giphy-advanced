import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (events) => {
    const { searchFunction } = this.props;
    searchFunction(events.target.value);
  }

  handleBlur = () => {
    const { searchingFunction } = this.props;
    searchingFunction(false);
  }

  handleFocus = () => {
    const { searchingFunction } = this.props;
    searchingFunction(true);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             onFocus={this.handleFocus} />
    );
  }
}

export default SearchBar;
