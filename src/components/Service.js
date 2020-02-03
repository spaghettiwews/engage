import React from 'react';
import './Service.css';

class Service extends React.Component {
  render() {
    return (
      <React.Fragment>
          <li key={this.props.index}><a href={this.props.url}><img alt={this.props.label} src={this.props.icon}/>{this.props.label}</a></li>
      </React.Fragment>
    );
  }
}

export default Service;
