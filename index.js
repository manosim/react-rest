import React from 'react';
import superagent from 'superagent';

import RequestUtils = require('./src/components/utils/request');
import Request from './src/components/request';
import Response from './src/components/response';

export default class LiveAPIEndpoints extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      endpoint: this.props.endpoint,
      response: null
    };
  }

  getData() {
    var method = this.refs.request.state.selectedMethod;
    return RequestUtils.shouldIncludeData(method) ? (
      this.refs.request.state.data
    ) : null;
  }

  makeRequest(event) {
    event.preventDefault();

    var self = this;
    var request = this.refs.request.state;

    var headers = {};
    if (this.refs.request.state.headers.authorization) {
      headers['Authorization'] = this.refs.request.state.headers.authorization;
    };

    var data = this.getData();

    // Now Make the Request
    APIRequest(request.selectedMethod, request.endpoint.path)
      .set(headers)
      .send(data)
      .end(function (err, res) {
        self.setState({
          response: res
        });
      });
  }

  render () {
    return (
      <form className="form-horizontal" onSubmit={this.makeRequest}>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 request">
              <Request endpoint={this.state.endpoint} ref='request' />
            </div>
            <div className="col-md-6 response">
              <Response payload={this.state.response} />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    );
  }
};
