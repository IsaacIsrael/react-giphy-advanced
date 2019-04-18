import React from 'react';
import Gif from './gif';

// Destructuring
// List pattern
const GifList = ({ ids, onSelect }) => {
  return (
    <div className="gif-list">
      { ids.map(({ id }) => <Gif id={id} key={id} onClick={onSelect} />)}
    </div>
  );
};

export default GifList;
