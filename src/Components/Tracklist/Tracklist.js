import React, {Component} from 'react';
import './Tracklist.css';
import Track from "../Track/Track";

class Tracklist extends Component {
    render() {
        return (
            <div className="TrackList">
                {
                    props.tracks
                    // this.props.tracks.map(track => {
                    //     return <Track key={track.id} track={track} />;
                    // })
                }
            </div>
        );
    }
}

export default Tracklist;