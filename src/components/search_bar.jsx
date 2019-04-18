import React, { Component } from 'react';

// Controlled Componnents
class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { term: "" };
  // }

  shouldComponentUpdate() {
    return false;
  }

  handleChange = (events) => {
    const { onSearch } = this.props;
    // this.setState({ term: events.target.value });
    onSearch(events.target.value);
  }

  render() {
    console.log("SEARCH BAR RENDER");
    // const { term } = this.state;
    return (
      <input
        // value={term}
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
