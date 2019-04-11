import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    const { id, selectFunction } = this.props;
    selectFunction(id);
  }


  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
