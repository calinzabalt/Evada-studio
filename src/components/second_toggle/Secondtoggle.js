import React, { Component } from 'react';
import './Secondtoggle.css';

class SecondToggle extends Component {
  render() {
    return (
            <div className="SecondToggle">
              <span onClick={this.props.toggleSidebar}></span>
            </div>
    );
  }
}

export default SecondToggle;