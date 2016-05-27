import React from 'react';

import FieldText from '../fields/text';
import FieldBoolean from '../fields/boolean';
import Header from '../helpers/header';
import RequestUtils from '../../utils/request';

export default class Data extends React.Component {
  removeCustomField(fieldName) {
    this.props.removeCustomField(fieldName);
  }

  handleBooleanChange(fieldName, value) {
    this.props.onChange(value, fieldName);
  }

  handleTextChange(fieldName, event) {
    this.props.onChange(event.target.value, fieldName);
  }

  _renderBooleanField(field, key) {
    var value = this.props.data[field.name];

    return (
      <FieldBoolean
        key={key}
        name={field.name}
        value={value}
        required={field.required ? 'required' : false}
        removeField={this.removeCustomField}
        isCustom={field.isCustom ? 'isCustom' : false}
        onChange={this.handleBooleanChange.bind(this, field.name)} />
    );
  }

  _renderTextInput(field, key) {
    var value = this.props.data[field.name];
    var type = field.name === 'password' ? 'password' : 'text';
    return (
      <FieldText
        key={key}
        type={type}
        name={field.name}
        value={value}
        placeholder={field.type}
        required={field.required ? 'required' : false}
        removeField={this.removeCustomField}
        isCustom={field.isCustom ? 'isCustom' : false}
        onChange={this.handleTextChange.bind(this, field.name)} />
    );
  }

  _renderFields() {
    return this.props.fields.map(function (field, key) {

      switch (field.type) {
        case ('BooleanField'):
          return this._renderBooleanField(field, key);

        case ('CharField'):
          // FIXME!
        default:
          return this._renderTextInput(field, key);
      }
    }, this);
  }

  render() {
    if (!RequestUtils.shouldIncludeData(this.props.selectedMethod)) {
      return null;
    }

    return (
      <div>
        {this.props.fields.length ? <Header title="Data" /> : null}
        {this._renderFields()}
      </div>
    );
  }
};

Data.propTypes = {
  selectedMethod: React.PropTypes.string.isRequired
};
