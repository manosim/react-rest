import React from 'react';

export default class FieldText extends React.Component {

  render() {
    const labelName = this.props.name.replace('_', ' ');

    return (
      <div className="form-group">
        <label
          htmlFor={this.props.name}
          className="col-sm-4 control-label">
            {this.props.isCustom ? (
              <button
                type="button"
                className="btn btn-link"
                title="Remove Field"
                onClick={() => this.props.removeField(this.props.name)}>
                ✘
              </button>
            ) : null}
            {labelName}
        </label>

        <div className="col-sm-8">
          <input
            type={this.props.type}
            className="form-control input-sm"
            id={this.props.name}
            placeholder={this.props.placeholder}
            onChange={(evt) => this.props.onChange(evt.target.value)}
            value={this.props.value}
            required={this.props.required} />
        </div>
      </div>
    );
  }
};
