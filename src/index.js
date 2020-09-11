import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

require('dotenv').config()
// if(process.env.NODE_ENV !== 'production'){
// }

ReactDOM.render(<App />, document.getElementById('root'));
