import React from 'react';

export default class FieldText extends React.Component {

  removeField(fieldName, event) {
    event.preventDefault();
    this.props.removeField(fieldName);
  }

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    const labelName = this.props.name.replace('_', ' ');

    return (
      <div className="form-group">
        <label
          htmlFor={this.props.name}
          className="col-sm-4 control-label">
            {this.props.isCustom ? (
              <i
                className="fa fa-minus-circle"
                title="Remove Field"
                onClick={this.removeField.bind(this, this.props.name)}
                />
            ) : null}
            {labelName}
        </label>
        <div className="col-sm-8">
          <input
            type={this.props.type}
            className="form-control input-sm"
            id={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            value={this.props.value}
            required={this.props.required} />
        </div>
      </div>
    );
  }
};
