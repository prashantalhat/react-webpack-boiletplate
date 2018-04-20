import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
    }

    onInputChanged = (event) => {
        if(event.target.value.length > 2){
            this.props.onTextChange(event.target.value);
        }
    }

    render() {
            return(
            <input type="text" onInput={this.onInputChanged}/>
        );
    }
}

SearchBar.propeTypes = {
    onTextChange: PropTypes.func.isRequired,
};

export default SearchBar;