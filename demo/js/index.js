require('../src/less/style.less');

import React from 'react';
import ReactDOM from 'react-dom';

import LiveAPIEndpoints from '../../index';

const data = {
  path: 'http://swapi.co/api/people/1/',
  methods: ['GET', 'OPTIONS'],
  fields: []
};

ReactDOM.render(
  <LiveAPIEndpoints endpoint={data} />, document.getElementById('demo')
);
