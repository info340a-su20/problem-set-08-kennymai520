import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import SAMPLE_DOGS from './dogs.json'; //a sample list of dogs (model)
import _ from 'lodash';


// let copy = Object.assign({}, SAMPLE_DOGS);
// let petObj = _.find(copy , ['name', 'Fido']);
// petObj['adopted'] = true;
// console.log(petObj);
// console.log(copy);


ReactDOM.render(<App pets={SAMPLE_DOGS} />, document.getElementById('root'));
