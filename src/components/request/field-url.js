import React from 'react';

import Header from '../helpers/header';
import FieldText from '../fields/text';

export default class FieldUrl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      url: nextProps.url
    });
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        <Header title="API Endpoint" />
        <FieldText
          type="text"
          name="Url Endpoint"
          value={this.state.url}
          placeholder="Endpoint Url"
          onChange={this.handleChange} />
      </div>
    );
  }
};
