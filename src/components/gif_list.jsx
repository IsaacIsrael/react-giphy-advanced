import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList =() => {
    const { ids, selectFunction } = this.props;
    return ids.map(gif => <Gif id={gif.id} key={gif.id} selectFunction={selectFunction} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
