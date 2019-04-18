import React, { Component } from 'react';

//  Null pattern
class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    const { id, onClick } = this.props;
    if (onClick) {
      onClick(id);
    }
  }


  render() {
    const { id } = this.props;
    console.log(`GIF RENDER ${id}`);
    if (!id) {
      return null;
    }
    const src = `https://media.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
