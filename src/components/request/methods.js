import React from 'react';

import Header from '../helpers/header';

export default class Methods extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      methods: [],
      selectedMethod: null
    };
  }

  componentWillMount() {
    this.setState({
      methods: this.props.methods,
      selectedMethod: this.props.selectedMethod
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      methods: nextProps.methods,
      selectedMethod: nextProps.selectedMethod
    });
  }

  setMethod(value) {
    this.props.setMethod(value);
  }

  render() {
    return (
      <div className="text-center">
        <Header title="Method" />
        <div className="btn-group methods">
          {this.state.methods.map(function (method, i) {
            const methodClass = 'btn btn-sm method ' + method.toLowerCase() +
              (this.state.selectedMethod === method ? ' active' : null);
            return (
              <button
                key={i}
                type="button"
                className={methodClass}
                onClick={this.setMethod.bind(this, method)}>{method}</button>
            );
          }, this)}
        </div>
      </div>
    );
  }
};
