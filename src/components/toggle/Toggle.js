import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  render() {
    return (
            <div className="Toggle">
              <span onClick={this.props.toggleMenu}></span>
            </div>
    );
  }
}

export default Toggle;