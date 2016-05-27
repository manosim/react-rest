import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <h5 className="section-title">{this.props.title}</h5>
    );
  }
};
