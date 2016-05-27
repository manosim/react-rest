require('../less/style.less');

import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import LiveAPIEndpoints from '../../../index.js';

const data = {
  fields: [],
  permissions: []
};

const url = 'http://swapi.co/api/people/1/';
const methods = ['GET', 'OPTIONS'];

ReactDOM.render(
  <LiveAPIEndpoints
    url={url}
    methods={methods}
    endpoint={data} />, document.getElementById('demo')
);
