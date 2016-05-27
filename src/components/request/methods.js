import React from 'react';

import Header from '../helpers/header';

export default class Methods extends React.Component {
  setMethod(value) {
    // FIXME: Move to JSX
    this.props.setMethod(value);
  }

  render() {
    return (
      <div className="text-center">
        <Header title="Method" />
        <div className="btn-group methods">
          {this.props.methods.map(function (method, i) {
            const methodClass = 'btn btn-sm method ' + method.toLowerCase() +
              (this.props.selectedMethod === method ? ' active' : null);
            return (
              <button
                key={i} type="button" className={methodClass}
                onClick={this.setMethod.bind(this, method)}>{method}</button>
            );
          }, this)}
        </div>
      </div>
    );
  }
};

Methods.propTypes = {
  methods: React.PropTypes.array.isRequired,
  selectedMethod: React.PropTypes.string.isRequired
};
