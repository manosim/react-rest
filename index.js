import React from 'react';
import superagent from 'superagent';

import RequestUtils from './src/utils/request';
import Request from './src/components/request';
import Response from './src/components/response';

export default class LiveAPIEndpoints extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
      fields: props.fields || [],
      permissions: props.endpoint.permissions || [],
      selectedMethod: props.methods ? props.methods[0] : null,
      response: null
    };
  }

  getData(method) {
    return RequestUtils.shouldIncludeData(method) ? (
      this.refs.request.state.data
    ) : null;
  }

  makeRequest(event) {
    event.preventDefault();

    var self = this;
    // FIXME!
    // const request = this.refs.request.state;
    // const request = {};
    const method = this.state.selectedMethod;

    const headers = {};
    // if (this.refs.request.state.headers.authorization) {
    //   headers['Authorization'] = this.refs.request.state.headers.authorization;
    // };

    var data = this.getData(method);

    // Now Make the Request
    superagent(method, this.state.url)
      .set(headers)
      .send(data)
      .end(function (err, res) {
        self.setState({
          response: res
        });
      });
  }

  handleUrlChange(value) {
    this.setState({
      url: value
    });
  }

  selectMethod(value) {
    this.setState({
      selectedMethod: value
    });
  }

  render () {
    return (
      <form className="form-horizontal" onSubmit={(evt) => this.makeRequest(evt)}>
        <div className="modal-body">
          <div className="row">
            <Request
              url={this.state.url}
              onUrlChange={(value) => this.handleUrlChange(value)}
              permissions={this.state.permissions}
              fields={this.state.fields}
              methods={this.props.methods}
              selectedMethod={this.state.selectedMethod}
              onSelectMethod={(value) => this.selectMethod(value)} />

            <Response
              payload={this.state.response} />
          </div>

          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    );
  }
};

LiveAPIEndpoints.propTypes = {
  url: React.PropTypes.string.isRequired,
  methods: React.PropTypes.array.isRequired,
  fields: React.PropTypes.array.isRequired
};
