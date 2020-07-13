import React, { Component } from 'react';
import './Secondtoggle.css';
import {Link} from 'react-router-dom';

class SecondToggle extends Component {
  render() {
    return (
            <div className="SecondToggle">
                <Link className={"nav-link"} to={"/"} onClick={this.props.toggleSidebar}>Projects</Link>
            </div>
    );
  }
}

export default SecondToggle;