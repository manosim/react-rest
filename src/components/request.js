import React from 'react';

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

  handleHeaderChange(value, fieldName) {
    var headers = this.state.headers;
    headers[fieldName] = value;

    this.setState({
      headers: headers
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
          removeField={(fieldName) => this.props.onRemoveField(fieldName)}
          onFieldChange={(value, fieldName) => this.props.handleFieldChange(value, fieldName)} />

        <AddFieldsForm
          selectedMethod={this.props.selectedMethod}
          onAdd={(name) => this.props.onAddField(name)} />
      </div>
    );
  }
};

Request.propTypes = {
  onUrlChange: React.PropTypes.func.isRequired,
  methods: React.PropTypes.array.isRequired,
  selectedMethod: React.PropTypes.string.isRequired,
  onAddField: React.PropTypes.func.isRequired,
  onRemoveField: React.PropTypes.func.isRequired
};
