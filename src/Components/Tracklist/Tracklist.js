import React, {Component} from 'react';
import './Tracklist.css';
import Track from "../Track/Track";

class Tracklist extends Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.music.map(track => {
                        return <Track key={track.id}
                                      track={track}
                                      isRemoval={this.props.isRemoval}
                                      onAdd={this.props.onAdd}
                                      onRemove={this.props.onRemove}
                        />;
                    })
                }
            </div>
        );
    }
}

export default Tracklist;