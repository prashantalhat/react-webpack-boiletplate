import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My minimal React Webpack Babel Setup';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('app')
);

// Additionally in the src/index.js file you have to define that hot reloading is available and should be used.
module.hot.accept();