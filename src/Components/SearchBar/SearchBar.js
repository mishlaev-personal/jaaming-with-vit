import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    render() {
        let searchBar = (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist"
                       onChange={this.handleTermChange}/>
                <a onClick={this.search}>SEARCH</a>
            </div>
        );
        let loginBar = (
            <div className="SearchBar">
                <a onClick={this.search}>LOGIN</a>
            </div>
        );
        if (this.props.isAuthorized) {
            return searchBar;
        } else {
            return loginBar;
        }
    }
}

export default SearchBar;