import React from 'react';

//tells JS that we want ReactDOM library
import ReactDOM from 'react-dom';

//imports app.css "./" means that we're importing from local file/dir
import './index.css';

//tells JS that we want to import the Appp component from App.js
import App from './App';

import registerServiceWorker from './registerServiceWorker';

//tells JS to find an element on the page which has an ID of "root"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
