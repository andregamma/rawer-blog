import React, { Component } from 'react';

// import { Container } from './styles';

export default class Button extends Component {
  render() {
    return (
        <a href={this.props.href} className={`w-32 h-8 py-1 px-4 font-bold text-white rounded-full ${this.props.bg} focus:outline-none`}>
            {this.props.text}
        </a>
    );
  }
}
