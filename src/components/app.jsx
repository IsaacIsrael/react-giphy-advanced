import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedId: null,
    };

    this.search("disney");
  }

  search = (querry) => {
    giphy('ZmS8aIVSmj5E8nQUsTQK5fFSjWNkK0zF').search({
      q: querry,
      rating: 'g',
      limit: 10,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedId: id
    });
  }

  render() {
    const { gifs, selectedId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar onSearch={this.search} />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={gifs} onSelect={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
