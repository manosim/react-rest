import React from 'react';

import Header from '../helpers/header';
import FieldText from '../fields/text';

export default class FieldUrl extends React.Component {

  render() {
    return (
      <div>
        <Header title="API Endpoint" />
        <FieldText
          type="text"
          name="Url Endpoint"
          value={this.props.url}
          placeholder="Endpoint Url"
          onChange={(value) => this.props.onChange(value)} />
      </div>
    );
  }
};
