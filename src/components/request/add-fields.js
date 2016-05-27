import React from 'react';

import Header from '../helpers/header';

export default class AddFieldsForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fieldName: ''
    };
  }

  addField() {
    if (this.state.fieldName) {
      this.props.onAdd(this.state.fieldName);
      this.setState({
        fieldName: ''
      });
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addField();
    }
  }

  handleChange(event) {
    this.setState({
      fieldName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Header title="Add Extra Fields" />

        <div className="form-group">
          <label className="col-sm-4 control-label">Field Name</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control input-sm"
              placeholder="ie. email_address"
              onKeyPress = {this.handleKeyPress}
              onChange={this.handleChange}
              value={this.state.fieldName} />
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-sm btn-block btn-info"
              onClick={this.addField}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
};
