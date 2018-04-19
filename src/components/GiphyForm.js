import React from 'react';
import SearchBar from './SearchBar';
import GiphyView from './GiphyView';

class GiphyForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p style={{color:'red'}}>{this.props.apiError}</p>
                <SearchBar onTextChange={this.props.onSearchTermChange} />
                <GiphyView imageUrl={this.props.imageUrl} searchTerm={this.props.searchTerm}/>
            </div>
        );
    }
}

export default GiphyForm;



