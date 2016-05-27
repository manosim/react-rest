require('../less/style.less');

import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import LiveAPIEndpoints from '../../../index.js';

const data = {
  permissions: []
};

const url = 'http://swapi.co/api/people/1/';
const methods = ['GET', 'OPTIONS'];
const fields = [];

ReactDOM.render(
  <LiveAPIEndpoints
    url={url}
    methods={methods}
    fields={fields}
    endpoint={data} />, document.getElementById('demo')
);
