import _ from 'underscore';
import React from 'react';

var AddFieldsForm = require('./request/add-fields');
var Headers = require('./request/headers');
var Data = require('./request/data');
var FieldUrl = require('./request/field-url');
var Methods = require('./request/methods');

export default class LiveAPIEndpoints extends React.Component {
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
    if (_.findWhere(endpoint.fields, {'name': fieldName})) return;

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

  handleUrlChange(event) {
    const endpoint = this.state.endpoint;
    endpoint.url = event.target.value;

    this.setState({
      endpoint
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
    var endpoint = this.state.endpoint;

    return (
      <div>
        <h3>Request</h3>

        <FieldUrl
          name='urlEndpoint'
          url={this.props.url}
          onChange={this.handleUrlChange} />

        <Methods
          methods={this.props.methods}
          selectedMethod={this.props.selectedMethod}
          setMethod={(value) => this.props.selectedMethod(value)} />

        <Headers
          headers={this.state.headers}
          permissions={this.props.permissions}
          handleHeaderChange={this.handleHeaderChange} />

        <Data
          method={this.state.selectedMethod}
          fields={this.props.fields}
          data={this.state.data}
          removeCustomField={this.removeField}
          onChange={this.handleDataFieldChange} />

        <AddFieldsForm
          onAdd={this.addField} />
      </div>
    );
  }
};
