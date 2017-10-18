import React, {Component} from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist tracks={this.props.searchResults}/>
                {
                    // this.props.searchResults.map(track => {
                    // return `${track.artist} - ${track.name} (${track.album}), `;
                    // })
                }
            </div>
        );
    }
}

export default SearchResults;