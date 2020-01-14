import React, { Component } from 'react';

// import { Container } from './styles';

export default class Button extends Component {
  render() {
    return (
        <button className={`w-32 h-8 font-bold text-white rounded-full ${this.props.bg} focus:outline-none`}>
            {this.props.text}
        </button>
    );
  }
}
