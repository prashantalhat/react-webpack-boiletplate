import React from 'react';

const GiphyView = ({imageUrl, searchTerm}) => {
    return (
        <div style={{ width: '100px', height: '200px' }}>
            <b>{searchTerm}</b>
            <img src={imageUrl} />
        </div>
    );
}

export default GiphyView;