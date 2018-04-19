import { combineReducers } from 'redux';
import * as Actions from '../actions';

const initialState = {
    searchTerm: '',
    imageUrl: '',
    apiError: ''
}

const GiphySerachApp = (state = initialState, action) => {
    console.log('GiphySerachApp', action);
    switch (action.type) {
        case Actions.UPDATE_SEARCH_TERM:
            return Object.assign({}, state, {
                searchTerm: action.searchTerm
            });
        case Actions.GIPHY_REQUEST_SUCESS:
            return Object.assign({}, state, {
                imageUrl: action.imageUrl
            });
        case Actions.GIPHY_REQUEST_ERROR:
            return Object.assign({}, state, {
                apiError: action.error
            });
        default:
            return state;
    }
}

export default GiphySerachApp;