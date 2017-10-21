import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        const mockArraySearch = [{
            id: 1,
            name: 'Supremacy',
            artist: 'Muse',
            album: '2nd law',
        }, {
            id: 2,
            name: 'ЧПХ',
            artist: 'Leningrad',
            album: 'Аврора',
        }, {
            id: 3,
            name: 'Дома посижу',
            artist: 'Anacondaz',
            album: 'Привет Гитлер',
        }];
        const mockArrayPlaylist = [{
            id: 4,
            name: 'Nube',
            artist: 'Linking Park',
            album: 'Hello',
        }, {
            id: 5,
            name: 'Song 2',
            artist: 'Blur',
            album: 'Album 3',
        }, {
            id: 6,
            name: 'History Song',
            artist: 'Gorillaz',
            album: '1984',
        }];
        this.state = {
            searchResults: mockArraySearch,
            playlistName: 'New Playlistttt',
            playlistTracks: mockArrayPlaylist,
        };
    }

    removeTrack(trackForRemove) {
        let searchResults = this.state.searchResults;
        let playlistTracks = this.state.playlistTracks.filter(function (track) {
            return track.id !== trackForRemove.id;
        });
        searchResults.push(trackForRemove);
        this.setState({
            playlistTracks: playlistTracks,
            searchResults: searchResults,
        });
    }

    addTrack(trackToAdd) {
        let playlistTracks = this.state.playlistTracks;
        let searchResults = this.state.searchResults.filter(function (track) {
            return track.id !== trackToAdd.id;
        });
        if (!playlistTracks.includes(trackToAdd.id)) {
            playlistTracks.push(trackToAdd);
            this.setState({
                playlistTracks: playlistTracks,
                searchResults: searchResults,
            });
        }
    }

    updatePlaylistName(name) {
        this.setState({playlistName: name});
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar/>
                    <div className="App-playlist">
                        <SearchResults onAdd={this.addTrack}
                                       searchResults={this.state.searchResults}/>
                        <Playlist playlistName={this.props.playlistName}
                                  playlistTracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}
                                  onNameChange={this.updatePlaylistName}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;