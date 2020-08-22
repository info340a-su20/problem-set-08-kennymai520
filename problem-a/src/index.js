import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { senatorList } from './senators.json'
//render the App component here!

ReactDOM.render(<App senators={senatorList} />, document.getElementById('root'));