import React from 'react';

import Header from '../helpers/header';
import FieldText from '../fields/text';
import RequestUtils from '../../utils/request';

export default class Headers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authorization: this.props.headers.authorization
    };
  }

  handleChange(fieldName, event) {
    this.props.handleHeaderChange(event.target.value, fieldName);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      authorization: nextProps.headers.authorization
    });
  }

  render() {
    if (!RequestUtils.shouldAddHeader(this.props.permissions)) {
      return null;
    }

    return (
      <div>
        <Header title="Headers" />
        <FieldText
          name="authorization"
          value={this.state.authorization}
          placeholder="Token 1234567890"
          onChange={this.handleChange.bind(this, 'authorization')} />
      </div>
    );
  }
};
