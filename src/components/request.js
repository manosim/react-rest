import _ from 'underscore';
import React, { PropTypes } from 'react';

import AddFieldsForm from './request/add-fields';
import Headers from './request/headers';
import Data from './request/data';
import FieldUrl from './request/field-url';
import Methods from './request/methods';

export default class Request extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      endpoint: null,
      headers: {}
    };
  }

  componentWillMount() {
    var endpoint = this.props.endpoint;
    var headers = this.state.headers;
    headers['authorization'] = window.token ? window.token : '';

    this.setState({
      endpoint: endpoint,
      headers: headers
    });
  }

  addField(fieldName) {
    var endpoint = this.state.endpoint;

    // Check if field already exists
    if (_.findWhere(endpoint.fields, {'name': fieldName})) { return; }

    endpoint.fields.push({
      name: fieldName,
      required: false,
      type: 'text',
      isCustom: true
    });

    this.setState({
      endpoint: endpoint
    });
  }

  removeField(fieldName) {
    var data = this.state.data;
    var endpoint = this.state.endpoint;
    var fields = endpoint.fields;

    data = _.omit(data, fieldName);
    fields = _.without(fields, _.findWhere(fields, {name: fieldName}));
    endpoint.fields = fields;

    this.setState({
      data: data,
      endpoint: endpoint
    });
  }

  handleHeaderChange(value, fieldName) {
    var headers = this.state.headers;
    headers[fieldName] = value;

    this.setState({
      headers: headers
    });
  }

  handleDataFieldChange(value, fieldName) {
    var data = this.state.data;
    data[fieldName] = value;
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="col-md-6 request">
        <h3>Request</h3>

        <FieldUrl
          name="urlEndpoint"
          url={this.props.url}
          onChange={(evt) => this.props.onUrlChange(evt)} />

        <Methods
          methods={this.props.methods}
          selectedMethod={this.props.selectedMethod}
          setMethod={(value) => this.props.onSelectMethod(value)} />

        <Headers
          headers={this.state.headers}
          permissions={this.props.permissions}
          handleHeaderChange={this.handleHeaderChange} />

        <Data
          selectedMethod={this.props.selectedMethod}
          fields={this.props.fields}
          data={this.state.data}
          removeCustomField={this.removeField}
          onChange={this.handleDataFieldChange} />

        <AddFieldsForm
          selectedMethod={this.props.selectedMethod}
          onAdd={this.addField} />
      </div>
    );
  }
};

Request.propTypes = {
  onUrlChange: PropTypes.func.isRequired,
  methods: PropTypes.array.isRequired,
  selectedMethod: PropTypes.string.isRequired,
};
