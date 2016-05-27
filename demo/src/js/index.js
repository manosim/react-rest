require('../less/style.less');

import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import LiveAPIEndpoints from '../../../index.js';

const data = {
  url: 'http://swapi.co/api/people/1/',
  methods: ['GET', 'OPTIONS'],
  fields: [],
  permissions: []
};

ReactDOM.render(
  <LiveAPIEndpoints endpoint={data} />, document.getElementById('demo')
);
