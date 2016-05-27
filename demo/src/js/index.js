require('../less/style.less');

import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import LiveAPIEndpoints from '../../../index.js';

const data = {
  permissions: []
};

// const url = 'http://swapi.co/api/people/1/';
// const methods = ['GET', 'OPTIONS'];
// const fields = [];

const url = 'http://demo.drfdocs.com/accounts/login/';
const methods = ['POST', 'OPTIONS'];
const fields = [
  {
    name: 'username',
    type: 'CharField',
    required: true
  },
  {
    name: 'password',
    type: 'CharField',
    required: true
  }
];

ReactDOM.render(
  <LiveAPIEndpoints
    url={url}
    methods={methods}
    fields={fields}
    endpoint={data} />, document.getElementById('demo')
);
