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

const url = 'http://0.0.0.0:8000/api/accounts/register/';
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
  },
  {
    name: 'email',
    type: 'CharField',
    required: true
  },
  {
    name: 'full_name',
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
