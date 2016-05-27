require('../src/less/style.less');

import React from 'react';
import ReactDOM from 'react-dom';

import LiveAPIEndpoints from '../../index';

const data = {
  url: 'http://swapi.co/api/people/1/',
  methods: ['GET', 'OPTIONS'],
  fields: [],
  permissions: []
};

ReactDOM.render(
  <LiveAPIEndpoints endpoint={data} />, document.getElementById('demo')
);
