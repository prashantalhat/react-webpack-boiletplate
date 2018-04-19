import { connect } from 'react-redux';

import * as Actions from '../actions';
import GiphyForm from '../components/GiphyForm';

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    imageUrl: state.imageUrl,
    apiError: state.apiError
});

const mapDispatchToProps = (dispatch) => ({
    onSearchTermChange: (searchTerm) => {
        dispatch({
            type: Actions.UPDATE_SEARCH_TERM,
            searchTerm
        });

        // send
        dispatch({
            type: Actions.SEND_GIPHY_REQUEST
        });

        const encodedQuery = encodeURIComponent(searchTerm);
        // send api call to get image url
        const url = `https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${encodedQuery}`;
        fetch(url)
            .then((response) => {
                console.log('giphy response', response);
                dispatch({
                    type: Actions.GIPHY_REQUEST_SUCESS,
                    ...response.data.fixed_height_downsampled_url
                });
            })
            .catch((error) => {
                dispatch({
                    type: Actions.GIPHY_REQUEST_ERROR,
                    error
                });
            });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphyForm);




