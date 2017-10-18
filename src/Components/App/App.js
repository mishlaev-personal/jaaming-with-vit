import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
    constructor(props) {
    super(props);
    const mockArray = [{
        name: 'Supremacy',
        artist: 'Muse',
        album: '2nd law',
    }, {
        name: 'ЧПХ',
        artist: 'Leningrad',
        album: 'Аврора',
    }, {
        name: 'Дома посижу',
        artist: 'Anacondaz',
        album: 'Привет Гитлер',
    }];
    this.state = { searchResults: mockArray };
    // this.searchResults = this.searchResults.bind(this);
  }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar/>
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}/>
                        <Playlist/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;